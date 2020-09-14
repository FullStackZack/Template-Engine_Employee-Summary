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

const teamArray = [];

function init() {
    addManager();
    team_options();
}

const addManager = () => {
    
    const managerQstns = inquirer.prompt([
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
    ]);

    const managerArr = new Manager(managerQstns.name, managerQstns.email, managerQstns.id, managerQstns.officeNum);
    teamArray.push(managerArr);
    team_options();
};

const team_options = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "team",
            message: "Let's pick our team!",
            choices: ["Engineer", "Intern", "No Room"]
        }
    ]);
    switch(team_options.team) {
        case "Engineer":
          return addEngineer();
            break;
        case "Intern":
          return addIntern();
            break;
        default:
            console.log("Let's check out the squad!");
            break;
    }
}

const addEngineer = () => {

    const engQstns = inquirer.prompt([
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
        }
    ]);
    const engineerArr = new Engineer(engQstns.name, engQstns.email, engQstns.id, engQstns.github);
    teamArray.push(engineerArr);
    team_options();
};

const addIntern = () => {
    
    const internQstns = inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Intern's Name:"
        },
        {
            type: "input",
            name: "email",
            message: "Email address?"
        },
        {
            type: "input",
            name: "id",
            message: "Do they have an employee ID yet? If so, what is it?"
        },
        {
            type: "input",
            name: "school",
            message: "Where are you currently studying?"
        },
    ]);
    const internArr = new Intern(internQstns.name, internQstns.email, internQstns.id, internQstns.school);
    teamArray.push(internArr);
    team_options();
};

module.exports = init
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