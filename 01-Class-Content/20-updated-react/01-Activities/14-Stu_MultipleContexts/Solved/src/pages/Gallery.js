import React, { Component } from "react";
import API from "../utils/API";
import UserContext from "../utils/userContext";
import CardContainer from "../components/CardContainer";
import Row from "../components/Row";
import LanguageContext from "../utils/LanguageContext";
import LanguageSelector from "../components/LanguageSelector";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languageObject: {
        language: "",
        languages: [],
        languageIndex: 0,
        handleBtnClick: this.handleLanguageBtnClick
      },
      userObject: {
        user: "",
        users: [],
        userIndex: 0,
        handleBtnClick: this.handleUserBtnClick,
        capitalizeFirstLetter: this.capitalizeFirstLetter
      }
    };
  }

  // When the component mounts, a call will be made to get random users.
  componentDidMount() {
    API.getLanguagesList().then((languages) => {
      this.setState({
        languageObject: {
          ...this.state.languageObject,
          languages: languages,
          language: languages[0]
        }
      });
      this.loadUsers(languages[0]);
    });
  }

  capitalizeFirstLetter(string = "") {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  nextUser(userIndex) {
    // Ensure that the user index stays within our range of users
    if (userIndex >= this.state.userObject.users.length) {
      userIndex = 0;
    }
    this.setState({
      userObject: {
        ...this.state.userObject,
        user: this.state.userObject.users[userIndex],
        userIndex: userIndex
      }
    });
  }

  previousUser(userIndex) {
    // Ensure that the user index stays within our range of users
    if (userIndex < 0) {
      userIndex = this.state.userObject.users.length - 1;
    }
    this.setState({
      userObject: {
        ...this.state.userObject,
        user: this.state.userObject.users[userIndex],
        userIndex: userIndex
      }
    });
  }

  handleUserBtnClick = (event) => {
    // Get the title of the clicked button
    const btnName = event.target.getAttribute("data-value");
    if (btnName === "next") {
      const userIndex = this.state.userObject.userIndex + 1;
      this.nextUser(userIndex);
    } else {
      const userIndex = this.state.userObject.userIndex - 1;
      this.previousUser(userIndex);
    }
  };

  loadUsers = (language) => {
    API.getUsersByLanguage(language).then((users) => {
      return this.setState({
        userObject: {
          ...this.state.userObject,
          users: users,
          user: users[0]
        }
      });
    })
      .catch(err => console.log(err));
  };

  nextLanguage(languageIndex) {
    // Ensure that the language index stays within our range of languages
    const languages = this.state.languageObject.languages;
    if (languageIndex >= languages.length) {
      languageIndex = 0;
    }
    this.loadUsers(languages[languageIndex]);
    this.setState({
      languageObject: {
        ...this.state.languageObject,
        language: languages[languageIndex],
        languageIndex: languageIndex
      }
    });
  }

  previousLanguage(languageIndex) {
    // Ensure that the language index stays within our range of languages
    const languages = this.state.languageObject.languages;
    if (languageIndex < 0) {
      languageIndex = languages.length - 1;
    }
    this.loadUsers(languages[languageIndex]);
    this.setState({
      languageObject: {
        ...this.state.languageObject,
        language: languages[languageIndex],
        languageIndex: languageIndex
      }
    });
  }

  handleLanguageBtnClick = (event) => {
    // Get the title of the clicked button
    const btnName = event.target.getAttribute("data-value");
    if (btnName === "next") {
      const languageIndex = this.state.languageObject.languageIndex + 1;
      this.nextLanguage(languageIndex);
    } else {
      const languageIndex = this.state.languageObject.languageIndex - 1;
      this.previousLanguage(languageIndex);
    }
  };

  render() {
    return (
      <UserContext.Provider value={this.state.userObject}>
        <LanguageContext.Provider value={this.state.languageObject}>
          <div>
            <h1 className="text-center">Welcome to LinkedUp</h1>
            <h3 className="text-center">Click on the arrows to browse users</h3>
            <LanguageSelector />
            <Row>
              <CardContainer />
            </Row>
          </div>
        </LanguageContext.Provider>
      </UserContext.Provider>
    );
  }
}

export default Gallery;
