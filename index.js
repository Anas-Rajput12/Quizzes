import chalk from "chalk";
import inquirer from "inquirer";
const quizzes = await inquirer.prompt([
    {
        type: "list",
        name: "Question_1",
        choices: ["a < b", "a > b", "a !== b", "a === b"],
        message: chalk.bold.greenBright `Q:1 In Typescript, What is the correct syntax to Check a is Greater than b ?`,
    },
    {
        type: "list",
        name: "Question_2",
        choices: ["string", "number", "boolean", "Array"],
        message: chalk.bold.greenBright `Q:2 In TypeScript, which data types used to print the name ?`,
    },
    {
        type: "list",
        name: "Question_3",
        choices: [":", ".", ";", ","],
        message: chalk.bold.greenBright `Q:3 In TypeScript, which symbol is commonly used to terminate a statement ?`,
    },
    {
        type: "list",
        name: "Question_4",
        choices: ["&", "$", "@", "#"],
        message: chalk.bold.greenBright `Q:4 In TypeScript, Which of the following characters is commonly allowed in variable names in typescript ?`,
    },
    {
        type: "list",
        name: "Question_5",
        choices: ["prompt()", "start()", "init()", "run()"],
        message: chalk.bold.greenBright `Q:5 In TypeScript, Which method of inquirer.js is used to start the prompt interface and recieve user input ?`,
    },
]);
let score = 0;
switch (quizzes.Question_1) {
    case "a > b":
        console.log(chalk.bold.green `Correct Answer`);
        ++score;
        break;
    default:
        console.log(chalk.bold.red.italic `Wrong Answer (Correct Answer is a > b)`);
        break;
}
console.log(chalk.bold.blue `Score question 1: ${score}`);
switch (quizzes.Question_2) {
    case "string":
        console.log(chalk.bold.green `Correct Answer`);
        ++score;
        break;
    default:
        console.log(chalk.bold.red.italic `Wrong Answer (Correct Answer is string)`);
        break;
}
console.log(chalk.bold.blue `Score question 2: ${score}`);
switch (quizzes.Question_3) {
    case ";":
        console.log(chalk.bold.green `Correct Answer`);
        ++score;
        break;
    default:
        console.log(chalk.bold.red.italic `Wrong Answer (Correct Answer is ;)`);
        break;
}
console.log(chalk.bold.blue `Score question 3: ${score}`);
switch (quizzes.Question_4) {
    case "$":
        console.log(chalk.bold.green `Correct Answer`);
        ++score;
        break;
    default:
        console.log(chalk.bold.red.italic `Wrong Answer(Correct answer is $)`);
        break;
}
console.log(chalk.bold.blue `Score question 4: ${score}`);
switch (quizzes.Question_5) {
    case "prompt()":
        console.log(chalk.bold.green `Correct Answer`);
        ++score;
        break;
    default:
        console.log(chalk.bold.red.italic `Wrong Answer (Correct Answer is prompt())`);
        break;
}
console.log(chalk.bold.blue `Final score: ${score}`);
