import React from "react";
import Content from "../components/Content";
import Nav from "../components/Nav";
import ThemeContext from "../components/ThemeContext";

function Home() {
  return (
    <div>
      <ThemeContext.Consumer>{theme => <Nav theme={theme} />}</ThemeContext.Consumer>
      <div style={{ textAlign: "center" }}>
        <h1>Multiple Context Providers!</h1>
      </div>
      <div style={{ margin: "0 auto" }}>
        <Content />
      </div>
    </div>
  );
}

export default Home;
