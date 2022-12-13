import {homedir} from "os";
import {fileURLToPath} from "url";
import * as readline from 'node:readline/promises';
import {handleOsOperation} from "./osOperations/handleOsOperation.js";
import {handleNavigation} from "./navigation/handleNavigation.js";
import {handleFileOperations} from "./fileOperations/handleFileOperations.js";
import {handleCompressing} from "./compressing/handleCompressing.js";
import {hash} from "./hash/hash.js";

const navigationCommands = ['ls','up','cd']
const compressingCommands = ['compress', 'decompress']
const fileOperationCommands = ['cat', 'add', 'rn', 'cp', 'mv', 'rm']
const osOperationCommands = ['eol', 'cpus', 'homedir', 'username', 'architecture'];

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
