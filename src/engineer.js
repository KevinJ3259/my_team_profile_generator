const Engineer = require("../lib/Engineer");
const inquirer = require("inquirer");

const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the engineer's name?",
  },
  {
    type: "input",
    name: "ID",
    message: "What is the engineer's ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the engineer's email?",
  },
  {
    type: "input",
    name: "github",
    message: "What is the engineer's github username?",
  },
];

function addEngineer() {
  return inquirer
    .prompt(engineerQuestions)
    .then(function (answers) {
      return new Engineer(answers.name, answers.ID, answers.email, answers.github);
    })
    .then(function (engineer) {
      return `<div class="card">
          <div class="card-head">
            <div>${engineer.getName()}</div>
            <div>${engineer.getRole()}</div>
          </div>
          <div class="card-body">
            <div>ID: ${engineer.getId()}</div>
            <div>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></div>
            <div>Github Username: <a href="${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></div>
          </div>
        </div>`;
    });
}

module.exports = addEngineer;
