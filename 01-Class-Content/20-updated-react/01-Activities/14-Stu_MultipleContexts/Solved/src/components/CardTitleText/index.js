import React, {useContext} from "react";
import UserContext from "../../utils/userContext";

function CardTitleText() {
  const { capitalizeFirstLetter, user } = useContext(UserContext)
  console.log(user)
  return (
    <h2>{capitalizeFirstLetter(user.firstname) +
      " " + capitalizeFirstLetter(user.lastname)}</h2>
  );
}

export default CardTitleText;
