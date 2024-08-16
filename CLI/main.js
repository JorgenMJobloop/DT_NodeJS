import { add } from "./Utils/add.js";
import { subtract } from "./Utils/subtract.js";
import { multiply } from "./Utils/multiply.js";
import { divide } from "./Utils/divide.js";
import { power } from "./Utils/power.js";
import { max } from "./Utils/max.js";
import { min } from "./Utils/min.js";
import fs from "fs";
import "node:process";

// ta inn argumenter fra kommandolinjen
const [, , command, num1args, num2args, outputFile] = process.argv;

const num1 = parseFloat(num1args);
const num2 = parseFloat(num2args);

if (isNaN(num1) || isNaN(num2)) {
    console.log("Please provide two numbers!");
    process.exit(1);
}

// argument parser
let result;
switch (command) {
    case "add":
        result = add(num1, num2);
        console.log(`Result of ${num1} + ${num2} = ${result}`);
        break;
    case "subtract":
        result = subtract(num1, num2);
        console.log(`Result of ${num1} - ${num2} = ${result}`);
        break;
    case "multiply":
        result = multiply(num1, num2);
        console.log(`Result of ${num1} * ${num2} = ${result}`);
        break;
    case "divide":
        try {
            result = divide(num1, num2);
            console.log(`Result of ${num1} / ${num2} = ${result}`);
        } catch (error) {
            console.log(error.message);
        }
        break;
    case "power":
        result = power(num1, num2);
        console.log(`${num1} to the power of ^${num2} = ${result}`);
        break;
    case "max":
        result = max(num1, num2);
        console.log(`The maximum value between ${num1} & ${num2} = ${result}`);
        break;
    case "min":
        result = min(num1, num2);
        console.log(`The minimum value between ${num1} & ${num2} = ${result}`);
        break;
    default:
        console.log("Unknown command! Please pass one of the following arguments to the program:\n 'add', 'subtract', 'multiply', 'divide', 'power', 'max', 'min'");
        process.exit(1);
}

const outputMessage = `Result: ${result}\n`;

if (outputFile) {
    fs.appendFile(outputFile, outputMessage, (error) => {
        if (error) {
            console.error("Error writing to the file:", error);
            process.exit(1);
        }
        console.log(`Results have been written to ${outputFile}`);
    });
} else {
    console.log(outputMessage);
}