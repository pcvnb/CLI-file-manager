import * as readline from 'node:readline/promises';
import {COMMANDS} from "./constants.js";
import {currentPathObject} from "./currentPathObject.js";
import {callCommand} from "./callCommand.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let isFinished = false;

const username = process.argv[3].split('=')[1]
const onExit = () => {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`)
}

process.on('exit', () => {
    onExit()
});

process.on('SIGINT', () => {
    process.exit()
});

const task = async () => {
    console.log(`Welcome to the File Manager, ${username}`)

    while (!isFinished) {
        console.log('You are currently in ', currentPathObject.getCurrentPath())

        const command = await rl.question('Please write your command below:\n');
        const partedCommand = command.split(' ');

        if (partedCommand[0] === COMMANDS.exit) {
            isFinished = true;
            process.exit()
        }

        try {
            await callCommand(partedCommand)
        } catch (error) {
            console.log(error.message)
        }
    }
}

await task();
