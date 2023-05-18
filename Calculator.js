import chalk from "chalk";
import readline from "readline-sync";
var operator;
var result;
var first_number;
var second_number;
var result_add;
var result_sub;
var result_rem;
var result_quo;
var result_pow;
var result_sq_;
var result_sq__;
var result_pro;

function add(number1, number2) {
  return number1 + number2;
}
function sub(number1, number2) {
  return number1 - number2;
}
function pro(number1, number2) {
  return number1 * number2;
}
function power(number1, number2) {
  return Math.pow(number1, number2);
}
function rem(number1, number2) {
  return number1 % number2;
}
function quo(number1, number2) {
  return number1 / number2;
}
function squarert(number1, number2) {
  return Math.sqrt(number1, number2);
}

async function Main() {
  operator = readline.question("Enter your operational method: ");
  switch (operator) {
    case "+":
      try {
        first_number = readline.questionFloat("Enter your first number: ", {
          limitMessage: chalk.red("Invalid number was given"),
        });
        second_number = readline.questionFloat("Enter your second number: ", {
          limitMessage: chalk.red("Invalid input was given"),
        });
        result = add(first_number, second_number);
        console.log(`${first_number} + ${second_number} = ${result}`);
      } catch (err) {
        console.log(chalk.red(err));
      }
      break;
    case "-":
      try {
        first_number = readline.questionFloat("Enter your first number: ", {
          limitMessage: chalk.red("Invalid number was given"),
        });
        second_number = readline.questionFloat("Enter your second number: ", {
          limitMessage: chalk.red("Invalid input was given"),
        });
        result = sub(first_number, second_number);
        console.log(
          chalk.greenBright(`${first_number} - ${second_number} = ${result}`)
        );
      } catch (err) {
        console.log(chalk.red(err));
      }
      break;
    case "/":
      try {
        first_number = readline.questionFloat("Enter your first number: ", {
          limitMessage: chalk.red("Invalid number was given"),
        });
        second_number = readline.questionFloat("Enter your second number: ", {
          limitMessage: chalk.red("Invalid input was given"),
        });
        result_quo = quo(first_number, second_number);
        result_rem = rem(first_number, second_number);
        console.log(
          chalk.greenBright(
            `${first_number} / ${second_number} = ${result_quo} as quotient and ${result_rem} as reminader`
          )
        );
      } catch (err) {
        console.log(chalk.red(err));
      }
      break;
    case "*":
      try {
        first_number = readline.questionFloat("Enter your first number: ", {
          limitMessage: chalk.red("Invalid number was given"),
        });
        second_number = readline.questionFloat("Enter your second number: ", {
          limitMessage: chalk.red("Invalid input was given"),
        });
        result = pro(first_number, second_number);
        console.log(
          chalk.greenBright(`${first_number} * ${second_number} = ${result}`)
        );
      } catch (err) {
        console.log(chalk.red(err));
      }
      break;
    case "p":
      try {
        first_number = readline.questionFloat("Enter your first number: ", {
          limitMessage: chalk.red("Invalid number was given"),
        });
        second_number = readline.questionFloat("Enter your second number: ", {
          limitMessage: chalk.red("Invalid input was given"),
        });
        result = power(first_number, second_number);
        console.log(
          chalk.greenBright(`${first_number} ^ ${second_number} = ${result}`)
        );
      } catch (err) {
        console.log(chalk.red(err));
      }
      break;
    case "s":
      try {
        first_number = readline.questionFloat("Enter your first number: ", {
          limitMessage: chalk.red("Invalid number was given"),
        });
        second_number = readline.questionFloat("Enter your second number: ", {
          limitMessage: chalk.red("Invalid input was given"),
        });
        result = squarert(first_number, second_number);
        console.log(
          chalk.greenBright(`Square root of ${first_number} is ${result}`)
        );
      } catch (err) {
        console.log(chalk.red(err));
      }
      break;
    case "a":
      try {
        first_number = readline.questionFloat("Enter your first number: ", {
          limitMessage: chalk.red("Invalid number was given"),
        });
        second_number = readline.questionFloat("Enter your second number: ", {
          limitMessage: chalk.red("Invalid input was given"),
        });
        result_add = add(first_number, second_number);
        result_sub = sub(first_number, second_number);
        result_pro = pro(first_number, second_number);
        result_rem = rem(first_number, second_number);
        result_quo = quo(first_number, second_number);
        result_pow = power(first_number, second_number);
        result_sq_ = squarert(first_number);
        result_sq__ = squarert(second_number);
        result = chalk.greenBright(
          `${first_number} + ${second_number} is ${result_add}\n${first_number} - ${second_number} = ${result_sub}\n${first_number} * ${second_number} = ${result_pro}\n${first_number} / ${second_number} = ${result_quo} as quotient and ${result_rem} as remainder\n${first_number}^${second_number} is ${result_pow}\nSquare root of ${first_number} is ${result_sq_}\nSquare root of ${second_number} is ${result_sq__}`
        );
        console.log(result);
      } catch (err) {
        console.log(chalk.red(err));
      }
      break;
    default:
      console.log(chalk.red("Invalid input was provided!"));
      break;
  }
}

Main();
