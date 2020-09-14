const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Choices = require("inquirer/lib/objects/choices");

    inquirer.prompt([
        {
            type: "list",
            name: "typeof",
            message: "What best describes your current title?",
            choices: ["Manager", "Engineer", "Intern"]
        }
    ]).then((res) => {
        if(res.typeof === "Manager") {
            managerQstns();
        }
        if(res.typeof === "Engineer") {
            return engineerQstns();
        }
        if(res.typeof === "Intern") {
            internQstns();
        }
    })

const restartQstns = () => [
    inquirer.prompt([
        {
            type: "list",
            name: "typeof",
            message: "Who do we still need to add?",
            choices: ["Manager", "Engineer", "Intern"]
        }
    ]).then((res) => {
        if(res.typeof === "Manager") {
            managerQstns();
        }
        if(res.typeof === "Engineer") {
            engineerQstns();
        }
        if(res.typeof === "Intern") {
            internQstns();
        }
    })
];  

const managerQstns = () => [
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Manager's Name:"
        },
        {
            type: "input",
            name: "email",
            message: "Manager's email address:"
        },
        {
            type: "input",
            name: "id",
            message: "What's their employee ID?"
        },
        {
            type: "input",
            name: "officeNum",
            message: "What is their office phone number?"
        },
        {
            type: "checkbox",
            name: "yesorno",
            message: "Still adding team members?",
            choices: ["yes", "no"]
        }
    ]).then(() => {
        if("yes") {
            restartQstns();
        } else {
            console.log("We're all set! Nice Job")
        }
    }) 
];

const engineerQstns = () => [
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Engineer's name:"
        },
        {
            type: "input",
            name: "email",
            message: "Email address?"
        },
        {
            type: "input",
            name: "id",
            message: "What's their employee ID# ?"
        },
        {
            type: "input",
            name: "github",
            message: "What's their Github username?"
        },
        {
            type: "checkbox",
            name: "yesorno",
            message: "Still adding team members?",
            choices: ["yes", "no"]
        }
    ]).then(() => {
        if("yes") {
            restartQstns();
        } else {
            console.log("We're all set! Nice Job")
        }
    }) 
]

const internQstns = () => [
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Intern's name:"
        },
        {
            type: "input",
            name: "email",
            message: "Email address?"
        },
        {
            type: "input",
            name: "id",
            message: "What's their employee ID# ?"
        },
        {
            type: "input",
            name: "school",
            message: "Where does the intern study?"
        },
        {
            type: "checkbox",
            name: "yesorno",
            message: "Still adding team members?",
            choices: ["yes", "no"]
        }
    ]).then(() => {
        if("yes") {
            restartQstns();
        } else {
            console.log("We're all set! Nice Job")
        }
    })  
]

render("name", "email", "id", "officeNum", "github"), {
    
}

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work'}'