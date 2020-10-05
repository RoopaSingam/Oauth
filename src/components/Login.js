import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { AuthConsumer } from "../authContext";

export const Auth = (props) => {
  const { loginWithRedirect } = useAuth0();
  return (
      <button
            onClick={() => loginWithRedirect()}
            variant="primary"
            className="btn-margin"
          >
            Log In one
          </button>
        );
};


const Login = () => (
  <div>
  <AuthConsumer>
     {({ initiateLogin }) => (
      <button className="btn btn-sm btn-primary" onClick={initiateLogin}>
        Login 
      </button>
    )}
  </AuthConsumer>
  </div>
);

export default Login;
