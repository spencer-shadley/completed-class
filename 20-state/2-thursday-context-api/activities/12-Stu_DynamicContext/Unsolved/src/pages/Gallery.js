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

    function capitalizeFirstLetter(string = ``) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function nextUser(uIndex) {
    // Ensure that the user index stays within our range of users
        if (uIndex >= users.length) {
            uIndex = 0;
        }
        setUser(users[uIndex]);
        setUserIndex(uIndex);
    }

    function previousUser(uIndex) {
    // Ensure that the user index stays within our range of users
        if (uIndex < 0) {
            uIndex = users.length - 1;
        }
        setUser(users[uIndex]);
        setUserIndex(uIndex);
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
                <CardContainer
                    title={
                        `${capitalizeFirstLetter(user.firstname)
                        } ${
                            capitalizeFirstLetter(user.lastname)}`
                    }
                    image={user.image}
                    language={user.language}
                    email={user.email}
                    handleBtnClick={handleBtnClick}
                />
            </Row>
        </div>
    );
}

export default Gallery;
