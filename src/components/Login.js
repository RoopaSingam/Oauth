import React from "react";

import { AuthConsumer } from "../authContext";




const Login = (props) => (
  <div>
  <AuthConsumer>
     {({ initiateLogin }) => (
      <button className="btn btn-sm btn-primary" onClick={initiateLogin}>
        Login {props.data}
      </button>
    )}
  </AuthConsumer>
  </div>
);

export default Login;
