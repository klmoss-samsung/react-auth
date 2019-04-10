import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import AppNav from "./components/AppNav";
import Index from "./components/Index";
import Login from "./components/Login";
// import Logout from "./components/Logout";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const Reset = () => {
  return <p>Reset Password Here</p>;
};

function AppRouter() {
  return (
    <Router>
      <div className="container">
        <h1>Demo Site</h1>
        <AppNav />
        <Route path="/dashboard" component={Index} />
        <Route path="/login/" component={Login} />
        <Route
          path="/logout/"
          render={props => {
            if (cookies.get("loggedIn") == "true") {
              cookies.set("loggedIn", false, { path: "/" });
              return <Redirect to="Login" />;
            }
          }}
        />
        <Route path="/reset/" component={Reset} />
      </div>
    </Router>
  );
}

export default AppRouter;

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       props.isAuthenticated === true ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to="/login" />
//       )
//     }
//   />
// );
