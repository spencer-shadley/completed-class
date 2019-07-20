import React from "react";
import UserContext from "./UserContext";

function NavLink() {
  return (
    <div style={{ marginLeft: "40px" }}>
      <UserContext.Consumer>{({ name }) => <h2>Welcome {name}!</h2>}</UserContext.Consumer>
    </div>
  );
}

export default NavLink;
