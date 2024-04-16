#!/usr/bin/env ts-node

import inquirer from "inquirer"

const answers : {
    sentence: string 
} = await inquirer.prompt(
    [
        {
            name: "sentence",
            message: "Enter a sentence to count words: ",
            type: "input"
        }
    ]
)
const words = answers.sentence.trim().split(" ")
console.log(words)
console.log(`There are ${words.length} words in your sentence.`)