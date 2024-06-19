#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgRed.bold("\n\tWelcome to the 'TYPESCRIPT QUIZ'\n"));
let points = 0;
let question = await inquirer.prompt([
    {
        type: "list",
        name: "one",
        message: "Question # 1: Which programming language is a superset of TypeScript?",
        choices: ["Python", "JavaScript", "C++", "All of the above"],
    },
    {
        type: "list",
        name: "two",
        message: "Question # 2: Who is the founder of TypeScript?",
        choices: [
            "Guido van Rossum",
            "Brendan Eich",
            "Anders Hejlsberg",
            "None of the above",
        ],
    },
    {
        type: "list",
        name: "three",
        message: "Question # 3: What are the  main 'simple types' in TypeScript?",
        choices: ["string", "numbers", "boolean", "All of the above"],
    },
    {
        type: "list",
        name: "four",
        message: "Question # 4: What is a union type in TypeScript?",
        choices: [
            "A type that can be any value",
            "A type that can be one of several types",
            "A type that can be an object",
            "None of the above",
        ],
    },
    {
        type: "list",
        name: "five",
        message: "Question # 5: How do you define an optional parameter in the TypeScript",
        choices: [
            "(type?: string)",
            "(type: string?)",
            "(type string=)",
            "None of the above",
        ],
    },
]);
if (question.one === "JavaScript") {
    console.log(chalk.green("1: CORRECT ANSWER!!"));
    ++points;
}
else
    console.log(chalk.red("1: INCORRECT ANSWER!!"));
if (question.two === "Anders Hejlsberg") {
    console.log(chalk.green("2: CORRECT ANSWER!!"));
    ++points;
}
else
    console.log(chalk.red("2: INCORRECT ANSWER!!"));
if (question.three === "All of the above") {
    console.log(chalk.green("3: CORRECT ANSWER!!"));
    ++points;
}
else
    console.log(chalk.red("3: INCORRECT ANSWER!!"));
if (question.four === "A type that can be one of several types") {
    console.log(chalk.green("4: CORRECT ANSWER!!"));
    ++points;
}
else
    console.log(chalk.red("4: INCORRECT ANSWER!!"));
if (question.five === "(type?: string)") {
    console.log(chalk.green("5: CORRECT ANSWER!!"));
    ++points;
}
else
    console.log(chalk.red("5: INCORRECT ANSWER!!"));
console.log(`Your score out of 5 is : ` + chalk.yellow(points));
if (points === 5) {
    console.log(chalk.magentaBright.italic("CONGRATULATIONS!! You answered all the questions correctly."));
}
else if (points < 5 && points >= 3) {
    console.log(chalk.cyanBright.italic("You tried well!"));
}
else if (points < 3 && points > 1) {
    console.log(chalk.yellowBright("Need some practice!"));
}
else
    console.log(chalk.red.italic("Please try again!"));
