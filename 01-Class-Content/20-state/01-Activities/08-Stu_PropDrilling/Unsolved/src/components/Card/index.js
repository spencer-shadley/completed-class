import React from "react";
import CardBody from "../CardBody";
import CardBtn from "../CardBtn";
import CardImg from "../CardImage";
import CardHeading from "../CardHeading";
import "./style.css";

function Card({ image }) {
  return (
    <div>
      <CardHeading />
      <CardImg />
      <CardBody />
      <CardBtn style={{ opacity: image ? 1 : 0 }} />
      <CardBtn style={{ opacity: image ? 1 : 0 }} />
    </div>
  );
}

export default Card;
