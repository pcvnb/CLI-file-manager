import * as readline from 'node:readline/promises';
import {COMMANDS, HANDLERS} from "./constants.js";
import {currentPathObject} from "./currentDirectory.js";

const rl = readline.createInterface({
    input: process.stdin,
});
const username = process.argv[3].split('=')[1]
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename);

let isFinished = false;


const callCommand = async (command) => {
    const partedCommand = command.split(' ');
    const commandFirstWord = partedCommand[0]
    if (COMMANDS.osOperations.includes(commandFirstWord)) {
        // if (commandParts.length > 2) return
        await HANDLERS.fileOperations(partedCommand)
        return
    }

    if (COMMANDS.navigation.includes(commandFirstWord)){
        await HANDLERS.navigation(partedCommand)
        return
    }

    if (commandFirstWord === COMMANDS.hash) {
        console.log(HANDLERS.hash())
        return
    }

    if (COMMANDS.compressing.includes(commandFirstWord)) {
        await HANDLERS.compressing(partedCommand)
        return
    }

    if (COMMANDS.fileOperations.includes(commandFirstWord)) {
        await HANDLERS.fileOperations(partedCommand)
    }
}

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
        // const commandParts = answer.split(' ')

        const command = await rl.question('What do you think of Node.js? ');

        if (command === COMMANDS.exit) {
            process.exit()
        }

        await callCommand(command)
    }
}

await task();
