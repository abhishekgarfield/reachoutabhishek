#!/usr/bin/env node
import boxen from "boxen";
import chalk from "chalk";
import inquirer from "inquirer";
import open from "open";
const data = {
  name: "Abhishek",
  working_as: "Software developer",
  github_url: "https://github.com/abhishekgarfield",
  instagram_url: "https://www.instagram.com/usererror_403/",
  stackOverflow_url: "https://stackoverflow.com/users/21259019/abhishek-sharma",
  linked_in_url: "https://www.linkedin.com/in/abhishek-sharma-902a9b193/",
  email_url: "abhishek2759@gmail.com",
  twitter_url: "https://twitter.com/abhishek2759",
  portfolio_url: "https://abhishekgarfield.github.io/abt_abhishek/"
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
  portfolio_url
} = data;

const data2 = {
  name: `${chalk.bold.green.underline(name)}`,
  portfolio: `${chalk.bold.green.underline(portfolio_url)}`,
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
  label_portfolio_url: `${chalk.bold.cyan("Portfolio")}`,
  message: `${chalk.bgBlack.red(
    "\n Hi dev hope you are doing good !\n If you liked this package don't forget to follow me on github. \n"
  )}${chalk.bgBlack.green.bold("\n Happy coding !\n")}`,
};

const aboutMe = boxen(
  [
    `${data2.label_working_as}    ${data2.working_as}`,
    ` `,
    `${data2.label_portfolio_url}    ${data2.portfolio}`,
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
  )}. \nThanks for showing interest in my work. Please wait while portfolio card is loading ...`,
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
    type: "list",
    name: "action",
    message: "What you want to do ?",
    choices: [
      {
        name: "Drop me a text on Instagram ?",
        value: () => {
          console.log(
            `${chalk.green.bold(
              `\nOpening ${chalk.bgWhite.italic(
                " Instagram web "
              )} \nPlease wait  and hope to see you ${chalk.yellow.italic(
                "again DEV "
              )}${String.fromCodePoint(0x1f609)} !\n`
            )}`
          );
          setTimeout(() => {
            open(instagram_url);
          }, 3000);
        },
      },
      {
        name: "Checkout my portfolio ?",
        value: () => {
          console.log(
            `${chalk.green.bold(
              `\nOpening ${chalk.bgWhite.italic(
                " Abhishek's portfolio "
              )} \nPlease wait  and hope to see you ${chalk.yellow.italic(
                "again DEV "
              )}${String.fromCodePoint(0x1f609)} !\n`
            )}`
          );
          setTimeout(() => {
            open(portfolio_url);
          }, 3000);
        },
      },
      {
        name: "Code related questions ? let's discuss them on stackoverflow",
        value: () => {
          console.log(
            `${chalk.green.bold(
              `\nOpening ${chalk.bgWhite.red.italic(
                " Stackoverflow "
              )}  \nPlease wait  and hope to see you ${chalk.yellow.italic(
                "again DEV "
              )}${String.fromCodePoint(0x1f609)} !\n`
            )}`
          );
          setTimeout(() => {
            open(stackOverflow_url);
          }, 3000);
        },
      },
      {
        name: "Job offers ? catch me on linkedin",
        value: () => {
          console.log(
            `${chalk.green.bold(
              `\nOpening ${chalk.bgWhite.red.italic(
                " Linkedin "
              )}  \nPlease wait  and hope to see you ${chalk.yellow.italic(
                "again DEV "
              )}${String.fromCodePoint(0x1f609)} !\n`
            )}`
          );
          setTimeout(() => {
            open(linked_in_url);
          }, 3000);
        },
      },
      {
        name: "Wanna code or clone some repos togeather ? Chekout my github ",
        value: () => {
          console.log(
            `${chalk.green.bold(
              `\nOpening ${chalk.bgWhite.red.italic(
                " Github "
              )}  \nPlease wait  and hope to see you ${chalk.yellow.italic(
                "again DEV "
              )}${String.fromCodePoint(0x1f609)} !\n`
            )}`
          );
          setTimeout(() => {
            open(github_url);
          }, 3000);
        },
      },
      {
        name: "Email me ?",
        value: () => {
          console.log(
            `${chalk.green.bold(
              `\nOpening your ${chalk.bgWhite.red.italic(
                " Email application "
              )}. See you at my Inbox\nPlease wait  and hope to see you ${chalk.yellow.italic(
                "again DEV "
              )}${String.fromCodePoint(0x1f609)} !\n`
            )}`
          );
          setTimeout(() => {
            open(`mailto:${email_url}`);
          }, 3000);
        },
      },
      {
        name: "Quit ?",
        value: () => {
          console.log(
            boxen(
              `\nHave a nice day dev!\nAlthough You can follow me on github ${String.fromCodePoint(
                0x1f609
              )}\n`,
              {
                backgroundColor: "black",
                float: "center",
                margin: 1,
                width: "100%",
                padding: 1,
                borderStyle: "singleDouble",
              }
            )
          );
        },
      },
    ],
  },
];
const display = () => {
  console.log(welcome)
 setTimeout(()=>{console.log(aboutMe);},3000);
 setTimeout(() => {
  prompt(questions).then((answer) => answer.action());
 }, 4000);
  
};
display();
