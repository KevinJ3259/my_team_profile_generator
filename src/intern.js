const Intern = require("../lib/Intern");
const inquirer = require("inquirer");

const internQuestions = [
    {
      type: "input",
      name: "name",
      message: "What is the intern's name?",
    },
    {
      type: "input",
      name: "ID",
      message: "What is the intern's ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the intern's email?",
    },
    {
      type: "input",
      name: "school",
      message: "What is the intern's school name?",
    },
  ];

  function addIntern() {
    return inquirer.prompt(internQuestions)
    .then(function(answers) {
      return new Intern(answers.name, answers.ID, answers.email, answers.school);
    })
    .then(function (intern) {
      return(`<div class="card">
          <div class="card-head">
            <div>${intern.getName()}</div>
            <div>${intern.getRole()}</div>
          </div>
          <div class="card-body">
            <div>ID: ${intern.getId()}</div>
            <div>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></div>
            <div>School Name: ${intern.getSchool()}</div>
          </div>
        </div>`);
    });
  }

  module.exports = addIntern;