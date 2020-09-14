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

const mgrCard = require("./templates/manager.html");
const engCard = require("./templates/engineer.html");
const intCard = require("./templates/intern.html");

const teamArray = [];

const init = () => {
    inquirer
      .prompt([
          {
            type: "input",
            name: "manager-name",
            message: "What's the Manager's name?"
          },
          {
            type: "input",
            name: "manager-email",
            message: "What's the Manager's email?"
          },
          {
            type: "input",
            name: "mgr-id",
            message: "What is the Manager's employee ID# ?"
          },
          {
            type: "input",
            name: "mgr-phone",
            message: "What is the Manager's office phone number?"
          }
      ]).then(res => {

        if (name === " ") {
            console.log("You are required to answer. Please respond!")
        };

        const manager = new Manager(res.manager-name, res.manager-email, res.mgr-id, res.mgr-phone)
        const HtmlMgrCard = mgrCard(manager);
        teamArray.push(HtmlMgrCard);

        addToTeam();

      }) 
};

const addToTeam = () => {
    inquirer
      .prompt([
          {
              type: "list",
              name: "add2team",
              message: "Do we need anyone else?",
              choices: ["Engineer", "Intern", "No. We're all set."]
          }
      ]).then(answers => {
          switch (answers.add2team) {
            case "Engineer": {
                addEngineer();
                break;
            }
            case "Intern": {
                addIntern();
                break;
            }
            default:
                console.log("Awesome! Let's see how your team stacks up now!") 
          }
      })
}

const addEngineer = () => {
    inquirer
      .prompt([
          {
            type: "input",
            name: "eng-name",
            message: "What's the Engineer's name?"
          },
          {
            type: "input",
            name: "eng-email",
            message: "What's the Engineer's email?"
          },
          {
            type: "input",
            name: "eng-id",
            message: "What about their employee ID# ?"
          },
          {
            type: "input",
            name: "eng-github",
            message: "What is the Engineer's Github username?"
          }
      ]).then(res => {

        if (name === " ") {
            console.log("You are required to answer. Please respond!")
        };

        const engineer = new Engineer(res.eng-name, res.eng-email, res.eng-id, res.eng-github);
        const HtmlEngCard = engCard(engineer);
        teamArray.push(HtmlEngCard);

        addToTeam();

      });
};

const addIntern = () => {
    inquirer
      .prompt([
          {
            type: "input",
            name: "int-name",
            message: "What's the Intern's name?"
          },
          {
            type: "input",
            name: "int-email",
            message: "What's the Intern's email?"
          },
          {
            type: "input",
            name: "intern-id",
            message: "What about their employee ID# ?"
          },
          {
            type: "input",
            name: "int-skool",
            message: "Where does the Intern currently study?"
          }
      ]).then(res => {
        if (name === " ") {
            console.log("You are required to answer. Please respond!")
        };

        const intern = new Intern(res.int-name, res.int-email, res.intern-id, res.int-skool);
        const HtmlIntCard = engCard(intern);
        teamArray.push(HtmlIntCard);

        addToTeam();

      });
};

const generateTeam() {}

init();

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