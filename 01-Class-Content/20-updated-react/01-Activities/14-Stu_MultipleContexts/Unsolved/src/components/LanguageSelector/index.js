import React from "react";
import CardBtn from "../CardBtn";
import "./style.css";

function LanguageSelector() {
  return (
    <div>
      <h3 className="text-center">Select the user language below:</h3>
      <div className="language-btn">
        <CardBtn
          style={{ opacity: true ? 1 : 0 }}
          data-value="back"
        />
        <span className="text-center">LANGUAGE HERE</span>
        <CardBtn
          style={{ opacity: true ? 1 : 0 }}
          data-value="next"
        />
      </div>
    </div>
  );
}

export default LanguageSelector;
