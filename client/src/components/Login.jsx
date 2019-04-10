import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Redirect } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

// resets cookie to false each time app is reset
// cookies.set("loggedIn", false, { path: "/" });

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      fireRedirect: true
    };
  }
  users = [
    {
      email: "kyle@kyle.com",
      password: "password1"
    },
    {
      email: "test@test.com",
      password: "password2"
    },
    {
      email: "sam@sung.com",
      password: "password3"
    }
  ];

  handleLogin = event => {
    event.preventDefault();
    this.users.forEach(user => {
      if (
        event.target[0].value === user.email &&
        event.target[1].value === user.password
      ) {
        cookies.set("loggedIn", true, { path: "/" });
        this.setState({ fireRedirect: true });
      }
    });
  };

  render() {
    if (cookies.get("loggedIn") == "true") {
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
            {cookies.get("loggedIn") == "true" ? (
              <Redirect to="/dashboard" />
            ) : null}
          </div>
        </div>
      );
    }
  }
}
