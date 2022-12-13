import {homedir} from "os";
import {fileURLToPath} from "url";

import * as readline from 'node:readline/promises';
import {COMMANDS, HANDLERS} from "./constants.js";

const rl = readline.createInterface({
    input: process.stdin,
});
const username = process.argv[3].split('=')[1]
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename);

let isFinished = false;
let currentDirectory = homedir()

const changeCurrentDirectory = (newDirectory) => {
    currentDirectory = newDirectory
}

const callCommand = async (command) => {
    if (COMMANDS.osOperations.includes(command)) {
        // if (commandParts.length > 2) return
        await HANDLERS.fileOperations(command)
        return
    }

    if (COMMANDS.navigation.includes(command)){
        await HANDLERS.navigation(command, currentDirectory, changeCurrentDirectory)
        return
    }

    if (command === COMMANDS.hash) {
        console.log(HANDLERS.hash())
        return
    }

    if (COMMANDS.compressing.includes(command)) {
        await HANDLERS.compressing(command)
        return
    }

    if (COMMANDS.fileOperations.includes(command)) {
        await HANDLERS.fileOperations(command)
    }
}

const task = async () => {
    console.log(`Welcome to the File Manager, ${username}`)
    while (!isFinished) {
        console.log('You are currently in ', currentDirectory)
        // const commandParts = answer.split(' ')

        const command = await rl.question('What do you think of Node.js? ');

        if (command === COMMANDS.exit) {
            isFinished = true;
        } else {
            await callCommand(command)
        }
    }
}

await task();
