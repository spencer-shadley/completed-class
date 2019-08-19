import React from "react";
import Card from "../Card";
import "./style.css";

function CardContainer({ title, image, email, language, handleBtnClick }) {
  return (
    <div className="jumbotron card-container">
      <Card title={title} image={image} language={language} 
        email={email} handleBtnClick={handleBtnClick} />
    </div>
  );
}

export default CardContainer;
