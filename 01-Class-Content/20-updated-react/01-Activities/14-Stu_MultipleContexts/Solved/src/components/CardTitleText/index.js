import React from "react";
import UserContext from "../../utils/userContext";

function CardTitleText() {
  return (
    <UserContext.Consumer>
      {(context) => (
        <h2>{context.capitalizeFirstLetter(context.user.firstname) +
          " " + context.capitalizeFirstLetter(context.user.lastname)}</h2>
      )} 
    </UserContext.Consumer>
  );
}

export default CardTitleText;
