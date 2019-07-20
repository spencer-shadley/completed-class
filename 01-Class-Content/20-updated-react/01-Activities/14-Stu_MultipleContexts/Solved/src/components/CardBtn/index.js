import React from "react";
import UserContext from "../../utils/userContext";
import "./style.css";

function CardBtn(props) {
  return (
    <UserContext.Consumer>
      {({ handleBtnClick }) => (
        <button onClick={handleBtnClick} className={`card-btn ${props["data-value"]}`} {...props} />
      )}
    </UserContext.Consumer>
  );
}

export default CardBtn;
