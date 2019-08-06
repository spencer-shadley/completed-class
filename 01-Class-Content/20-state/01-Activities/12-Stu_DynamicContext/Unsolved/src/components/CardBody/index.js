import React from "react";

function CardBody({ language, email }) {
  return (
    <div>
      <h4>
      Favorite language: {language}
      </h4>
      <h4>
      Email: {email}
      </h4>
    </div>
  );
}

export default CardBody;
