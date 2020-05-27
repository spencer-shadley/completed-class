import React, { useEffect, useState } from 'react';

import API from '../utils/API';
import CardContainer from '../components/CardContainer';
import Row from '../components/Row';
import UserContext from '../utils/userContext';

function Gallery() {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});
    const [userIndex, setUserIndex] = useState(0);

    // When the component mounts, a call will be made to get random users.
    useEffect(() => {
        loadUsers();
    }, []);

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

    function capitalizeFirstLetter(string = ``) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function nextUser(uIndex) {
    // Ensure that the user index stays within our range of users
        if (uIndex >= users.length) {
            uIndex = 0;
        }
        setUserIndex(uIndex);
        setUser(users[uIndex]);
    }

    function previousUser(uIndex) {
    // Ensure that the user index stays within our range of users
        if (userIndex < 0) {
            uIndex = users.length - 1;
        }
        setUserIndex(uIndex);
        setUser(users[uIndex]);
    }

    function handleBtnClick(event) {
    // Get the title of the clicked button
        const btnName = event.target.getAttribute(`data-value`);
        if (btnName === `next`) {
            const newUserIndex = userIndex + 1;
            nextUser(newUserIndex);
        } else {
            const newUserIndex = userIndex - 1;
            previousUser(newUserIndex);
        }
    }

    return (
        <UserContext.Provider
            value={{ user, users, userIndex, capitalizeFirstLetter, handleBtnClick }}
        >
            <div>
                <h1 className="text-center">Welcome to LinkedUp</h1>
                <h3 className="text-center">Click on the arrows to browse users</h3>
                <Row>
                    <CardContainer />
                </Row>
            </div>
        </UserContext.Provider>
    );
}

export default Gallery;
