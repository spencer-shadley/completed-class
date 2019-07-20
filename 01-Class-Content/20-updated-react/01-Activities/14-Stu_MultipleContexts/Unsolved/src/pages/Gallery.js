import React, { Component } from "react";
import API from "../utils/API";
import UserContext from "../utils/userContext";
import CardContainer from "../components/CardContainer";
import Row from "../components/Row";
import LanguageSelector from "../components/LanguageSelector";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: [],
      user: {},
      users: [],
      userIndex: 0,
      capitalizeFirstLetter: this.capitalizeFirstLetter,
      handleBtnClick: this.handleBtnClick
    };
  }

  // When the component mounts, the list of languages are fetched. 
  // After the languages are retreived we make another call to load users who use the first language in the list.
  componentDidMount() {
    API.getLanguagesList().then((languages) => {
      this.setState({
        languageObject: {
        }
      });
      this.loadUsers(languages[0]);
    });
  }

  capitalizeFirstLetter(string = "") {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  nextUser(userIndex) {
    if (userIndex >= 0) {
    }
    this.setState({
    });
  }

  previousUser(userIndex) {
    if (userIndex < 0) {
    }
    this.setState({

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

  loadUsers(language) {
    API.getUsersByLanguage(language).then((users) => {
      return this.setState({
        
      });
    })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <UserContext.Provider value={this.state}>
        <div>
          <h1 className="text-center">Welcome to LinkedUp</h1>
          <h3 className="text-center">Click on the arrows to browse users</h3>
          <LanguageSelector />
          <Row>
            {/* <CardContainer /> */}
          </Row>
        </div>
      </UserContext.Provider>
    );
  }
}

export default Gallery;
