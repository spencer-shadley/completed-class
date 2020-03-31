/* eslint-disable no-empty-function */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import API from '../utils/API';
import CardContainer from '../components/CardContainer';
import Row from '../components/Row';

function Gallery() {
    const [user, setUser] = useState({});
    const [users, setUsers] = useState([]);
    const [userIndex, setUserIndex] = useState(0);

    // When the component mounts, a call will be made to get random users.
    useEffect(() => {
        loadUsers();
    }, []);

    // Capitalize the first letter of a given string
    function capitalizeFirstLetter(string = ``) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // Ensure that the user index stays within our range of users
    function nextUser() {}

    // Ensure that the user index stays within our range of users
    function previousUser() {}

    function handleBtnClick(event) {
    // Get the title of the clicked button
        const btnName = event.target.getAttribute(`data-value`);
        if (btnName === `next`) {
            nextUser();
        } else {
            previousUser();
        }
    }

    function loadUsers() {
        API.getLanguagesList()
            .then(languages => {
                API.getUsersByLanguage(languages[0]).then(usersByLanguage => {
                    setUsers(usersByLanguage);
                    setUser(usersByLanguage[0]);
                });
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h1 className="text-center">Welcome to LinkedUp</h1>
            <h3 className="text-center">Click on the arrows to browse users</h3>
            <Row>
                {/* TODO: CardContainer requires more props, add the others here
                  * each prop will continue to be passed (drilled) to the next
                  * component until you reach a "leaf" component
                  */}
                <CardContainer language={user.language} />
            </Row>
        </div>
    );
}

export default Gallery;
