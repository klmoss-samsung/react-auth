import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { BrowserRouter as Redirect } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default class Logout extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/users")
      .then(res => res.json())
      .then(result => {
        this.setState({
          users: result
        });
      });
  }

  handleLogout = event => {
    event.preventDefault();
    this.users.forEach(user => {
      if (
        event.target[0].value === user.email &&
        event.target[1].value === user.password
      ) {
        cookies.set("loggedIn", false, { path: "/" });
        const { history } = this.props;
        history.push("/dashboard");
      }
    });
  };

  render() {
    if (cookies.get("loggedIn") === true) {
      return <Redirect to="/dashboard" />;
    } else {
      return (
        <div className="row">
          <div className="col-12">
            <form onSubmit={this.handleLogin}>
              <Form>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input type="email" name="email" id="email" />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input type="password" name="password" id="password" />
                </FormGroup>
                <Button>Submit</Button>
              </Form>
            </form>
          </div>
        </div>
      );
    }
  }
}
