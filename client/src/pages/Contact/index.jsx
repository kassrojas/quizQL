import React, { useState } from "react";
import emailValidator from "../../utils/emailValidator";
import "./index.css"

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { target } = e;
    const inputName = target.name;
    const inputValue = target.value;

    if (inputName === "name") {
      setName(inputValue);
    } else if (inputName === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setError("All fields are required!");
    } else if (email && !emailValidator(email)) {
      setError("Please enter a valid email address!");
      return;
    } else {
      setName("");
      setEmail("");
      setMessage("");
      setError("");
    }
  };

  return (
    <form action="mailto:smoke5643@gmail.com">
      <fieldset>
        <div className="row justify-content-center">
          <div className="col-6">
            <h2 className="text-white text-center mt-4">
              Contact Us
              <hr />
            </h2>
            <div className="form-group">
              <label
                className="col-form-label m-2 text-white"
                for="inputDefault"
              >
                Name:
              </label>
              <input
                name="name"
                onChange={handleChange}
                type="text"
                className="form-control"
                placeholder="Enter your name"
                id="inputDefault"
              />
            </div>
            <div className="form-group">
              <label className="form-label m-2 text-white" for="inputEmail">
                Email address:
              </label>
              <input
                name="email"
                onChange={handleChange}
                type="email"
                className="form-control"
                id="inputEmail"
                aria-describedby="emailHelp"
                placeholder="Enter your email address"
              />
            </div>
            <div className="form-group">
              <label
                for="exampleTextarea"
                className="form-label m-2 text-white"
              >
                Message:
              </label>
              <textarea
                name="message"
                onChange={handleChange}
                className="form-control"
                id="exampleTextarea"
                rows="3"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              onClick={handleFormSubmit}
              type="submit"
              className="btn contactBtn mt-3"
            >
              Submit
            </button>
          </div>
        </div>
        {error && (
          <div className="row text-center text-light">
            <p>{error}</p>
          </div>
        )}
      </fieldset>
    </form>
  );
}
