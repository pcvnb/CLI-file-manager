import {homedir} from "os";
import {fileURLToPath} from "url";

import * as readline from 'node:readline/promises';
import {hash} from "./hash/hash.js";
import {
    compressingCommands,
    fileOperationCommands,
    navigationCommands,
    osOperationCommands
} from "./constants.js";
import {
    handleCompressing,
    handleFileOperations,
    handleNavigation,
    handleOsOperation
} from "./handlers.js";

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
        const answer = await rl.question('What do you think of Node.js? ');
        // const commandParts = answer.split(' ')

        if (osOperationCommands.includes(answer)) {
            // if (commandParts.length > 2) return
            handleOsOperation(answer)
        } else if (navigationCommands.includes(answer)){
            await handleNavigation(answer, currentDirectory, changeCurrentDirectory)
        } else if (answer === 'hash') {
            console.log(await hash())
        } else if (compressingCommands.includes(answer)) {
            handleCompressing(answer)
        } else if (answer === '.exit') {
            isFinished = true;
        } else if (fileOperationCommands.includes(answer)) {
            await handleFileOperations(answer)
        }
    }
}

await task();
