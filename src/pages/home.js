import React from "react";
import { Redirect } from "react-router-dom";

import { AuthConsumer } from "../authContext";
import Login from "../components/Login";
import PostsList from "../components/PostsList";

const HomePage = () => (
  //  const [count, setCount] = useState("1");
 <div> <AuthConsumer>
    {({ authenticated }) =>
      authenticated ? (
        <Redirect to="/dashboard" />
      ) : (
        <div>
          <h2>Welcome to React RBAC Tutorial.</h2>
          {/* {count} */}
          <Login  data="Admin"/>
          <Login data="User"/>
          <PostsList />
        </div>
      )
    }
  </AuthConsumer>
 
  </div>
);

export default HomePage;
