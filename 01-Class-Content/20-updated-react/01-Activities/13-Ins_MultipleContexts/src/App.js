import * as React from "react";
import Home from "./pages/Home";
import ThemeContext from "./components/ThemeContext";
import UserContext from "./components/UserContext";
import AlertContext from "./components/AlertContext";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {
        name: "Bob",
        getUserToken: this.getUserToken
      },
      alert: {
        display: false,
        theme: "success",
        onClick: (theme, display) => {
          this.setState({ alert: { ...this.state.alert, theme, display } });
        }
      }
    };
  }

  getUserToken() {
    return "SampleToken123";
  }

  render() {
    // Here we are overwriting each Context Object with values from the state of App.js and a string literal.
    return (
      <AlertContext.Provider value={this.state.alert}>
        <UserContext.Provider value={this.state.user}>
          <ThemeContext.Provider value={"dark"}>
            <Home />
          </ThemeContext.Provider>
        </UserContext.Provider>
      </AlertContext.Provider>
    );
  }
}

export default App;
