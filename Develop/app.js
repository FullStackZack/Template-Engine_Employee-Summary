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

const employees = [];

const addManager = () => {

  console.log("First, let's add your manager!")

    inquirer
      .prompt([
          {
            type: "input",
            name: "name",
            message: "What's the Manager's name?"
          },
          {
            type: "input",
            name: "email",
            message: "What's the Manager's email?"
          },
          {
            type: "input",
            name: "id",
            message: "What is the Manager's employee ID# ?"
          },
          {
            type: "input",
            name: "officeNumber",
            message: "What is the Manager's office phone number?"
          }
      ]).then(res => {

        const manager = new Manager(res.name, res.email, res.id, res.officeNumber);

        console.log(`${res.name} has been added!`);

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
              

                fs.writeFile(outputPath, fs.readFileSync("./templates/main.html"), function(err) {
                  if (err) throw err;
                })

                break;
          }
      })
}

const addEngineer = () => {
    inquirer
      .prompt([
          {
            type: "input",
            name: "name",
            message: "What's the Engineer's name?"
          },
          {
            type: "input",
            name: "email",
            message: "What's the Engineer's email?"
          },
          {
            type: "input",
            name: "id",
            message: "What about their employee ID# ?"
          },
          {
            type: "input",
            name: "github",
            message: "What is the Engineer's Github username?"
          }
      ]).then(res => {

        const engineer = new Engineer(res.name, res.email, res.id, res.github);

        console.log(`${res.name} has been added!`);

        addToTeam();

      });
};

const addIntern = () => {
    inquirer
      .prompt([
          {
            type: "input",
            name: "name",
            message: "What's the Intern's name?"
          },
          {
            type: "input",
            name: "email",
            message: "What's the Intern's email?"
          },
          {
            type: "input",
            name: "id",
            message: "What about their employee ID# ?"
          },
          {
            type: "input",
            name: "school",
            message: "Where does the Intern currently study?"
          }
      ]).then(res => {

        const intern = new Intern(res.name, res.email, res.id, res.school);

        console.log(`${res.name} has been added!`);

        addToTeam();

      });
};

module.exports = employees;

addManager();

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