import React from "react";
import CardBtn from "../CardBtn";
import LanguageContext from "../../utils/LanguageContext";
import "./style.css";

function LanguageSelector() {
  return (
    <LanguageContext.Consumer>
      {({ language, handleBtnClick }) => (
        <div>
          <h3 className="text-center">Select the user language below:</h3>
          <div className="language-btn">
            <CardBtn
              style={{ opacity: language ? 1 : 0 }}
              onClick={handleBtnClick}
              data-value="back"
            />
            <span className="text-center">{language}</span>
            <CardBtn
              style={{ opacity: language ? 1 : 0 }}
              onClick={handleBtnClick}
              data-value="next"
            />
          </div>
        </div>
      )}
    </LanguageContext.Consumer>
  );
}

export default LanguageSelector;
