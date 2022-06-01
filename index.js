const inquirer = require("inquirer");
const fs = require("fs").promises;
const path = require("path");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

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

const menuQuestions = [
  {
    type: "list",
    name: "choice",
    message: "What would you like to do?",
    choices: ["Add an engineer", "Add an intern", "Finish entry"],
  },
];

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

const output = [];

function addManager() {
  return inquirer.prompt(managerQuestions)
  .then(function(answers) {
    return new Manager(answers.name, answers.ID, answers.email, answers.office);
  })
  .then(function (manager) {
    output.push(`<div class="card">
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
function addEngineer() {
  return inquirer.prompt(engineerQuestions)
  .then(function (answers) {
    return new Engineer(answers.name, answers.ID, answers.email, answers.github);
  })
  .then(function (engineer) {
    output.push(`<div class="card">
        <div class="card-head">
          <div>${engineer.getName()}</div>
          <div>${engineer.getRole()}</div>
        </div>
        <div class="card-body">
          <div>ID: ${engineer.getId()}</div>
          <div>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></div>
          <div>Github Username: ${engineer.getGithub()}</div>
        </div>
      </div>`);
  });
}
function addIntern() {
  return inquirer.prompt(internQuestions)
  .then(function(answers) {
    return new Intern(answers.name, answers.ID, answers.email, answers.school);
  })
  .then(function (intern) {
    output.push(`<div class="card">
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

async function run() {
  await addManager();
  let answers = await inquirer.prompt(menuQuestions);
  while (answers.choice !== "Finish entry") {
    //clone what we currently have for add manager including the questions
    switch (answers.choice) {
      case "Add an engineer":
        await addEngineer();
        break;
      case "Add an intern":
        await addIntern();
    }
    answers = await inquirer.prompt(menuQuestions);
  }
  console.log(output);
  const htmlContents = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Team Profile Generator</title>
        <style type="text/css">
        .title {
            background: salmon;
            height: 5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-size: 1.5rem;
            font-family: sans-serif;
            margin-bottom: 2rem;
          }
          
          .card-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
          }
    
          .card {
            width: 20rem;
            border-radius: 0.25rem;
            margin-bottom: 1rem;
          }
    
          .card-head {
            padding: 1rem;
            background: #1565c0;
            color: white;
            border-radius: 0.5rem 0.5rem 0 0;
          }
    
          .card-body {
            padding: 1rem;
            background: lightgrey;
            border-radius: 0 0 0.5rem 0.5rem;
            border-top: 3px groove lightgrey;
          }
    
          .card-body div {
            padding: 0.5rem;
            margin-bottom: 0.5rem;
            background: white;
            border: 3px inset lightgrey;
          }
    
          .card-body div:last-of-type {
            margin-bottom: 0;
          }
        </style>
      </head>
      <body>
        <div class="title">My Team</div> 
        <div class="card-container">${output.join("\n")}</div>
      </body>
    </html>`;
  await fs.writeFile(path.join(__dirname, "index.html"), htmlContents);
}

run();
