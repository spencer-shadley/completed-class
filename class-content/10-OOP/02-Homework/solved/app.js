'use strict';

const prompts = require('./prompts');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const render = require('./lib/htmlRenderer.js');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const outputPath = path.resolve(__dirname, 'output', 'team.html');

const teamMembers = [];
const idArray = [];

async function init() {
  console.log('Please build your team');
  const answers = await inquirer.prompt(prompts.manager);

  const manager = new Manager(
    answers.managerName,
    answers.managerId,
    answers.managerEmail,
    answers.managerOfficeNumber
  );
  teamMembers.push(manager);
  idArray.push(answers.managerId);
  createTeam();
}

async function createTeam() {
  const userChoice = await inquirer.prompt(prompts.memberChoice);
  switch (userChoice.memberChoice) {
    case 'Engineer':
      addEngineer();
      break;
    case 'Intern':
      addIntern();
      break;
    default:
      buildTeam();
  }
}

function addEngineer() {
  const answers = inquirer.prompt(prompts.engineer);
  const engineer = new Engineer(
    answers.engineerName,
    answers.engineerId,
    answers.engineerEmail,
    answers.engineerGithub
  );
  teamMembers.push(engineer);
  idArray.push(answers.engineerId);
  createTeam();
}

function addIntern() {
  const answers = inquirer.prompt(prompts.intern);
  const intern = new Intern(
    answers.internName,
    answers.internId,
    answers.internEmail,
    answers.internSchool
  );
  teamMembers.push(intern);
  idArray.push(answers.internId);
  createTeam();
}

function buildTeam() {
  console.log('buildTeam', outputPath, teamMembers);
  fs.writeFile(outputPath, render(teamMembers), (err, data) =>
    console.log('Finished building team!', err, data)
  );
}

init();
