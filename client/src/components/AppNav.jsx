import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import Cookies from "universal-cookie";
const cookies = new Cookies();

// export default class AppNav extends React.Component {
//   render() {
//     return (
//       <Nav>
//         <NavItem>
//           <NavLink href="/dashboard">Home</NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink href="/login">Login</NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink href="/logout">Logout</NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink href="/reset">Reset</NavLink>
//         </NavItem>
//       </Nav>
//     );
//   }
// }

export default class AppNav extends React.Component {
  render() {
    console.log(cookies.get("loggedIn"));
    return (
      <Nav>
        <NavItem>
          <NavLink href="/dashboard">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/login">Login</NavLink>
        </NavItem>
        <NavItem>
          {cookies.get("loggedIn") == "true" ? (
            <NavLink href="/logout">Logout</NavLink>
          ) : null}
        </NavItem>

        {/* <NavItem>
          <NavLink href="/logout">Logout</NavLink>
        </NavItem> */}
        <NavItem>
          <NavLink href="/reset">Reset</NavLink>
        </NavItem>
      </Nav>
    );
  }
}
