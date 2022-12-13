import {homedir} from "os";
import {fileURLToPath} from "url";

import * as readline from 'node:readline/promises';
import {hash} from "./hash/hash.js";
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

const task = async () => {
    console.log(`Welcome to the File Manager, ${username}`)
    while (!isFinished) {
        console.log('You are currently in ', currentDirectory)
        const command = await rl.question('What do you think of Node.js? ');
        // const commandParts = answer.split(' ')

        if (COMMANDS.osOperations.includes(command)) {
            // if (commandParts.length > 2) return
            await HANDLERS.fileOperations(command)
        } else if (COMMANDS.navigation.includes(command)){
            await HANDLERS.navigation(command, currentDirectory, changeCurrentDirectory)
        } else if (command === 'hash') {
            console.log(await hash())
        } else if (COMMANDS.compressing.includes(command)) {
            HANDLERS.compressing(command)
        } else if (command === '.exit') {
            isFinished = true;
        } else if (COMMANDS.fileOperations.includes(command)) {
            await HANDLERS.fileOperations(command)
        }
    }
}

await task();
