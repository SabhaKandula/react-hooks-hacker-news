import React from "react";
import useFormValidation from "./useFormValidation";

const INITIAL_STATE = {
  name: "",
  email: "",
  password: ""
};

function Login(props) {
  const { handleChange, handleSubmit, values } = useFormValidation(
    INITIAL_STATE
  );
  const [login, setLogin] = React.useState(true);

  return (
    <div>
      <h2 className="mv3">{login ? "Login" : "Create Account"}</h2>
      <form action="" className="flex flex-column" onSubmit={handleSubmit}>
        {!login && (
          <input
            onChange={handleChange}
            type="text"
            name="name"
            value={values.name}
            placeholder="Your name"
            autoComplete="off"
          />
        )}
        <input
          onChange={handleChange}
          type="email "
          name="email"
          value={values.email}
          placeholder="Your email"
          autoComplete="off"
        />
        <input
          onChange={handleChange}
          type="password"
          name="password"
          value={values.password}
          placeholder="Choose a secure password"
        />
        <div className="flex mt3">
          <button type="submit" className="button pointer mr2">
            Submit
          </button>
          <button
            type="button"
            className="button pointer"
            onClick={() => setLogin(prevLogin => !prevLogin)}
          >
            {login ? "need to create an account" : "Already have an account?"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
