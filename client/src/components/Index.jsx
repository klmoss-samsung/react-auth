import React from "react";
import { BrowserRouter as Redirect } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

class Index extends React.Component {
  state = {
    isLoading: true,
    users: []
  };

  componentDidMount() {
    fetch("http://localhost:5000/users")
      .then(res => res.json())
      .then(result => {
        this.setState({
          users: result,
          isLoading: false
        });
      });
  }

  render() {
    if (cookies.get("loggedIn") === "false") {
      this.props.history.push("/login");
      return <Redirect to="/login" />;
    } else
      return (
        <div>
          <div>
            <h1>Protected Content</h1>
          </div>
          <div>
            <ul>
              {this.state.isLoading ? (
                <li>Loading...</li>
              ) : (
                this.state.users.map(user => {
                  return <li>{user.email}</li>;
                })
              )}
            </ul>
          </div>
        </div>
      );
  }
}

// export default withRouter(Index);
export default Index;
