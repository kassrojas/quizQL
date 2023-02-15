const { AuthenticationError } = require("apollo-server-express");
const { User, Question, Result } = require("../models");
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
    allResults: async () => {
      return Result.find().populate("user").sort({ score: "desc" });
    },
    userResults: async (_, args) => {
      return Result.find({ user: args.user });
    },
    userResultsByCategory: async (_, args) => {
      return Result.find({ user: args.user, category: args.category });
    },
    searchQuestions: async (_, args) => {
      return Question.find({ category: args.category })
        .limit(10)
        .skip(Math.floor(Math.random() * 3));
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
    addScore: async(_, args) => {
      console.log('user', args.user, 'cat', args.category)
      return await Result.create({ user: args.user, score: args.score, category: args.category })
    }
  },
};

module.exports = resolvers;
