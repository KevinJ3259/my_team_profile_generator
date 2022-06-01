const inquirer = require("inquirer");
const fs = require("fs").promises;
const path = require("path");

const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const addEngineer = require("./src/engineer");
const addIntern = require("./src/intern");
const addManager = require("./src/manager");



const menuQuestions = [
  {
    type: "list",
    name: "choice",
    message: "What would you like to do?",
    choices: ["Add an engineer", "Add an intern", "Finish entry"],
  },
];




const output = [];





async function run() {
  const managerHtml = await addManager();
  output.push(managerHtml);
  let answers = await inquirer.prompt(menuQuestions);
  while (answers.choice !== "Finish entry") {
    switch (answers.choice) {
      case "Add an engineer":
        const engineerHtml = await addEngineer();
        output.push(engineerHtml);
        break;
      case "Add an intern":
        const internHtml = await addIntern();
        output.push(internHtml);
    }
    answers = await inquirer.prompt(menuQuestions);
  }
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
