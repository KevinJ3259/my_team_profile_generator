const Manager = require("../lib/Manager");
const inquirer = require("inquirer");

const managerQuestions = [
    {
      type: "input",
      name: "name",
      message: "What is the manager's name?",
    },
    {
      type: "input",
      name: "ID",
      message: "What is the manager's ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the manager's email?",
    },
    {
      type: "input",
      name: "office",
      message: "What is the manager's office number?",
    },
  ];

  function addManager() {
    return inquirer.prompt(managerQuestions)
    .then(function(answers) {
      return new Manager(answers.name, answers.ID, answers.email, answers.office);
    })
    .then(function (manager) {
      return(`<div class="card">
          <div class="card-head">
            <div>${manager.getName()}</div>
            <div>${manager.getRole()}</div>
          </div>
          <div class="card-body">
            <div>ID: ${manager.getId()}</div>
            <div>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></div>
            <div>Office number: ${manager.getOfficeNumber()}</div>
          </div>
        </div>`);
    });
  }

  module.exports = addManager;