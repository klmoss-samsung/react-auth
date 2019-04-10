import React from "react";
import { BrowserRouter as Redirect } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

class Index extends React.Component {
  // componentWillMount() {
  //   console.log(cookies.get("loggedIn"));
  //   if (cookies.get("loggedIn") !== true) {
  //     console.log("inside compwillmount");
  //     this.props.history.push("/login");
  //   }
  // }

  render() {
    if (cookies.get("loggedIn") === "false") {
      this.props.history.push("/login");
      return <Redirect to="/login" />;
    } else
      return (
        <div>
          <h1>Protected Content</h1>
        </div>
      );
  }
}

// export default withRouter(Index);
export default Index;
