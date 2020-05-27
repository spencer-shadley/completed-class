export default {
    findUpdatedStudents() {
        const students = ['Abram', 'Andrea Thomas', 'Ari Horowitz', 'Duc-Hoang', 'Dane Shrewsbury', 'Esther Walker', 'Frantz Felix', 'George Travis', 'Issouf Kiema', 'Jared Kong', 'Juan Navarro', 'Justin Le', 'Kaitlyn Carlson', 'Marie Lenac', 'Lisa Cabrera', 'Lloyd Marcelino', 'Maximillian Cartwright', 'Benjamin', 'Teresa Liu', 'Owen Chanthala', 'Rachel Rohrbach', 'Randy Burgess', 'Remy Guts', 'Richard Wang', 'Spencer Fife', 'Ryan Sousa', 'Vaughn McPherson'].sort();

        const randomlyChosenStudents = students.map(student => Math.random() > 0.7 ? student : undefined);

        return randomlyChosenStudents;
    }
};