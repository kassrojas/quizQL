const { AuthenticationError } = require("apollo-server-express");
const { User, Question, Results } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    searchUsers: async (_parent, args) => {
      const search = args.term;
      const rgx = (pattern) => new RegExp(`.*${pattern}.*`);
      const searchRgx = rgx(search);
      return User.find({
        $or: [
          {
            email: {
              $regex: searchRgx,
              $options: "i",
            },
          },
          {
            username: {
              $regex: searchRgx,
              $options: "i",
            },
          },
        ],
      });
    },
    users: async () => {
      return User.find();
    },
    user: async (_, args) => {
      return User.findOne({ _id: args.id });
    },
    me: async (_, _args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    allQuestions: async () => {
      return Question.find();
    },
    searchCategories: async () => {
      return Question.find().populate("category").sort({ category: "asc" });
    },
    userResults: async (_, args) => {
      return Results.find({ user: args.user });
    },
    searchQuestions: async (_, args) => {
      return Question.find({ category: args.category })
        .limit(10)
        .skip(Math.floor(Math.random() * 6));
    },
  },

  Mutation: {
    addUser: async (_, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (_, { email, username, password }) => {
      const user = await User.findOne(email ? { email } : { username });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
