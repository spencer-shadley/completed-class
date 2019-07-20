import React from 'react';
import UserContext from "../../utils/userContext";

function CardBody() {
  return (
    <UserContext.Consumer>
      {({ user }) => (
        <div>
          <h4>
          Favorite language: {user.language}
          </h4>
          <h4>
          Email: {user.email}
          </h4>
        </div>
      )}
    </UserContext.Consumer>
  )
}

export default CardBody;
