import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Login = () => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  const renderForm = () => {
    if (data) {
      return (
        <p>
          Success! You may now head <Link to="/">back to the homepage.</Link>
        </p>
      );
    }
    return (
      <form onSubmit={handleFormSubmit}>
        <div className="form-row">
          <div className="col">
            <input
              placeholder="Your email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="col">
            <input
              placeholder="******"
              name="password"
              type="password"
              value={formState.password}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="col">
            <button type="submit" className="btn btn-success">
              Login
            </button>
          </div>
        </div>
      </form>
    );
  };

  return (
    <main>
      <h4 className="text-white">Login</h4>
      <div className="text-white p-3">
        {renderForm()}
        {error && <div>{error.message}</div>}
      </div>
    </main>
  );
};

export default Login;
