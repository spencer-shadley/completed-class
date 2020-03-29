import axios from 'axios';

const languages = [`JavaScript`, `Python`, `C`, `Ruby`, `Java`, `PHP`, `C#`];
// Export an object containing methods we'll use for accessing the random user API
export default {
    getUsersByLanguage(language) {
        return new Promise((resolve, reject) => {
            axios
                .get(`https://randomuser.me/api/?results=15`)
                .then(res => {
                    const users = res.data.results;
                    const results = users.map(user => ({
                        firstname: user.name.first,
                        lastname: user.name.last,
                        email: user.email,
                        image: user.picture.large,
                        language
                    }));
                    resolve(results);
                })
                .catch(err => reject(err));
        });
    },
    // Return a Promise to simulate an async call
    getLanguagesList() {
        return new Promise(resolve => {
            resolve(languages);
        });
    }
};
