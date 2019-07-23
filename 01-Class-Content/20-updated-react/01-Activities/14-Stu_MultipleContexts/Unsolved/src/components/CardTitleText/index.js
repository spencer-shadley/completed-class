import React, { useContext } from "react";
import UserContext from "../../utils/userContext";

function CardTitleText() {
  console.log(useContext(UserContext))
  const { user, capitalizeFirstLetter } = useContext(UserContext);
  return (
    <h2>{capitalizeFirstLetter(user.firstname) +
      " " + capitalizeFirstLetter(user.lastname)}</h2>
  );
}

export default CardTitleText;
