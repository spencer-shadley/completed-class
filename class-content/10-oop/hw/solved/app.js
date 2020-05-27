'use strict';

const prompts = require('./prompts');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const render = require('./lib/htmlRenderer');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const outputPath = path.resolve(__dirname, 'output', 'team.html');

const teamMembers = [];

const debugMode = false;

async function init() {
  console.log('Please build your team');
  const answers = debugMode
    ? {
        managerName: 'kelly',
        managerId: 1,
        managerEmail: 'k@tableau.com',
        managerOfficeNumber: 2
      }
    : await inquirer.prompt(prompts.manager);

  const manager = new Manager(
    answers.managerName,
    answers.managerId,
    answers.managerEmail,
    answers.managerOfficeNumber
  );
  teamMembers.push(manager);
  prompts.idArray.push(answers.managerId);
  await createTeam();
}

async function createTeam() {
  try {
    const userChoice = debugMode
      ? { memberChoice: 'Intern' }
      : await inquirer.prompt(prompts.memberChoice);
    switch (userChoice.memberChoice) {
      case 'Engineer':
        await addEngineer();
        break;
      case 'Intern':
        await addIntern();
        break;
      default:
        buildTeam();
    }
  } catch (err) {
    console.error('createTeam error', err);
  }
}

async function addEngineer() {
  const answers = await inquirer.prompt(prompts.engineer);
  const engineer = new Engineer(
    answers.engineerName,
    answers.engineerId,
    answers.engineerEmail,
    answers.engineerGithub
  );
  teamMembers.push(engineer);
  prompts.idArray.push(answers.engineerId);
  createTeam();
}

async function addIntern() {
  try {
    const answers = debugMode
      ? {
          internName: 'derek',
          internId: 4,
          internEmail: 'derek@tableau.com',
          internSchool: 'UW'
        }
      : await inquirer.prompt(prompts.intern);
    const intern = new Intern(
      answers.internName,
      answers.internId,
      answers.internEmail,
      answers.internSchool
    );
    teamMembers.push(intern);
    prompts.idArray.push(answers.internId);
    createTeam();
  } catch (err) {
    console.error(err);
  }
}

function buildTeam() {
  fs.writeFile(outputPath, render(teamMembers), err => {
    if (err) {
      console.error(err);
    } else {
      console.log('Finished building team!');
    }
  });
}

init();
