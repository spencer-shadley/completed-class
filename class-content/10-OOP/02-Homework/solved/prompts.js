'use strict';

const idArray = [];

module.exports = {
  idArray,
  manager: [
    {
      type: 'input',
      name: 'managerName',
      message: "What is your manager's name?",
      validate: answer => {
        if (answer !== '') {
          return true;
        }
        return 'Please enter at least one character.';
      }
    },
    {
      type: 'input',
      name: 'managerId',
      message: "What is your manager's id?",
      validate: answer => {
        const pass = answer.match(/^[1-9]\d*$/);
        if (pass) {
          return true;
        }
        return 'Please enter a positive number greater than zero.';
      }
    },
    {
      type: 'input',
      name: 'managerEmail',
      message: "What is your manager's email?",
      validate: answer => {
        const pass = answer.match(/\S+@\S+\.\S+/);
        if (pass) {
          return true;
        }
        return 'Please enter a valid email address.';
      }
    },
    {
      type: 'input',
      name: 'managerOfficeNumber',
      message: "What is your manager's office number?",
      validate: answer => {
        const pass = answer.match(/^[1-9]\d*$/);
        if (pass) {
          return true;
        }
        return 'Please enter a positive number greater than zero.';
      }
    }
  ],
  memberChoice: [
    {
      type: 'list',
      name: 'memberChoice',
      message: 'Which type of team member would you like to add?',
      choices: [
        'Engineer',
        'Intern',
        "I don't want to add any more team members"
      ]
    }
  ],
  engineer: [
    {
      type: 'input',
      name: 'engineerName',
      message: "What is your engineer's name?",
      validate: answer => {
        if (answer !== '') {
          return true;
        }
        return 'Please enter at least one character.';
      }
    },
    {
      type: 'input',
      name: 'engineerId',
      message: "What is your engineer's id?",
      validate: answer => {
        const pass = answer.match(/^[1-9]\d*$/);
        if (pass) {
          if (idArray.includes(answer)) {
            return 'This ID is already taken. Please enter a different number.';
          } else {
            return true;
          }
        }
        return 'Please enter a positive number greater than zero.';
      }
    },
    {
      type: 'input',
      name: 'engineerEmail',
      message: "What is your engineer's email?",
      validate: answer => {
        const pass = answer.match(/\S+@\S+\.\S+/);
        if (pass) {
          return true;
        }
        return 'Please enter a valid email address.';
      }
    },
    {
      type: 'input',
      name: 'engineerGithub',
      message: "What is your engineer's GitHub username?",
      validate: answer => {
        if (answer !== '') {
          return true;
        }
        return 'Please enter at least one character.';
      }
    }
  ],
  intern: [
    {
      type: 'input',
      name: 'internName',
      message: "What is your intern's name?",
      validate: answer => {
        if (answer !== '') {
          return true;
        }
        return 'Please enter at least one character.';
      }
    },
    {
      type: 'input',
      name: 'internId',
      message: "What is your intern's id?",
      validate: answer => {
        const pass = answer.match(/^[1-9]\d*$/);
        if (pass) {
          if (idArray.includes(answer)) {
            return 'This ID is already taken. Please enter a different number.';
          } else {
            return true;
          }
        }
        return 'Please enter a positive number greater than zero.';
      }
    },
    {
      type: 'input',
      name: 'internEmail',
      message: "What is your intern's email?",
      validate: answer => {
        const pass = answer.match(/\S+@\S+\.\S+/);
        if (pass) {
          return true;
        }
        return 'Please enter a valid email address.';
      }
    },
    {
      type: 'input',
      name: 'internSchool',
      message: "What is your intern's school?",
      validate: answer => {
        if (answer !== '') {
          return true;
        }
        return 'Please enter at least one character.';
      }
    }
  ]
};
