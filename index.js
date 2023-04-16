#!/usr/bin/env node
import boxen from "boxen";
import chalk from "chalk";
import inquirer from "inquirer";
const data = {
  name: "Abhishek",
  working_as: "Software developer",
  github_url: "https://github.com/abhishekgarfield",
  instagram_url: "https://www.instagram.com/usererror_403/",
  stackOverflow_url: "https://stackoverflow.com/users/21259019/abhishek-sharma",
  linked_in_url: "https://www.linkedin.com/in/abhishek-sharma-902a9b193/",
  email_url: "abhishek2759@gmail.com",
  twitter_url: "https://twitter.com/abhishek2759",
};

const {
  name,
  working_as,
  github_url,
  instagram_url,
  stackOverflow_url,
  linked_in_url,
  email_url,
  twitter_url,
} = data;

const data2 = {
  name: `${chalk.bold.green.underline(name)}`,
  working_as: `${chalk.italic.black(working_as)}`,
  github_url: `${chalk.italic.black(github_url)}`,
  instagram_url: `${chalk.italic.black(instagram_url)}`,
  stackOverflow_url: `${chalk.italic.black(stackOverflow_url)}`,
  linked_in_url: `${chalk.italic.black(linked_in_url)}`,
  email_url: `${chalk.italic.black(email_url)}`,
  twitter_url: `${chalk.italic.black(twitter_url)}`,
  label_working_as: `${chalk.bold.cyan("Working as")}`,
  label_github_url: `${chalk.bold.cyan("Github")}`,
  label_instagram_url: `${chalk.bold.cyan("Instagram")}`,
  label_stackOverflow_url: `${chalk.bold.cyan("Stackoverflow")}`,
  label_linked_in_url: `${chalk.bold.cyan("Linkedin")}`,
  label_email_url: `${chalk.bold.cyan("Email")}`,
  label_twitter_url: `${chalk.bold.cyan("Twitter")}`,
  message: `${chalk.bgBlack.red(
    "\n Hi dev hope you are doing good !\n If you liked this package don't forget to follow me on github. \n"
  )}${chalk.bgBlack.green.bold("\n Happy coding !\n")}`,
};

const aboutMe = boxen(
  [
    `${data2.label_working_as}    ${data2.working_as}`,
    ` `,
    `${data2.label_email_url}         ${data2.email_url}`,
    ` `,
    `${data2.label_instagram_url}     ${data2.instagram_url}`,
    ` `,
    `${data2.label_stackOverflow_url} ${data2.stackOverflow_url}`,
    ` `,
    `${data2.label_linked_in_url}      ${data2.linked_in_url}`,
    ` `,
    `${data2.label_github_url}        ${data2.github_url}`,
    ` `,
    `${data2.label_twitter_url}       ${data2.twitter_url}`,
    ` `,
    `${boxen(data2.message, { backgroundColor: "black" })}`,
  ].join("\n"),
  {
    margin: 1,
    float: "center",
    width: "100%",
    padding: 1,
    borderStyle: "singleDouble",
    borderColor: "green",
    align: "left",
    backgroundColor: "white",
    title: "example",
    titleAlignment: "left",
  }
);

const welcome = boxen(
  `Hello dev ${String.fromCodePoint(0x1f609)} ! \nThis side ${chalk.green.bold(
    name
  )}. \nThanks for showing interest in my work.`,
  {
    backgroundColor: "black",
    float: "center",
    margin: 1,
    width: "100%",
    padding: 1,
    borderStyle: "singleDouble",
  }
);

const prompt = inquirer.createPromptModule();
const questions = [
  {
    type:"list",
    name:"action",
    
  }
]
const display = () => {
  console.log(welcome);
  console.log(aboutMe);
};
display();
