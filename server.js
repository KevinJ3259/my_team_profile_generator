const inquirer = require("inquirer");

const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the manager's name?"
    },
    {
        type: "input",
        name: "ID",
        message: "What is the manager's ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the manager's email?"
    },
    {
        type: "input",
        name: "office",
        message: "What is the manager's office number?"
    },
]

const menuQuestions = [
    {
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: [
            "Add an engineer",
            "Add an intern",
            "Finish entry"
        ]
    }
]

const output = []

function addManager(){
    return inquirer.prompt(managerQuestions)
    .then(function(answers){
        console.log(answers)
        output.push(`<div class="card">
        <div class="card-head">
          <div>${answers.name}</div>
          <div>Manager</div>
        </div>
        <div class="card-body">
          <div>ID: ${answers.ID}</div>
          <div>Email: ${answers.email}</div>
          <div>Office number: ${answers.office}</div>
        </div>
      </div>`)
    });  
}

async function run(){
    await addManager()
    do{
        const answers = await inquirer.prompt(menuQuestions)
        //clone what we currently have for add manager including the questions
    }while(answers.choice!=="Finish entry")
}

run()