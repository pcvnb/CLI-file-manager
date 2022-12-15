import {COMMANDS, HANDLERS, throwInputError} from "./constants.js";

export const callCommand = async (partedCommand) => {
    const commandFirstWord = partedCommand[0];

    if (COMMANDS.osOperations.includes(commandFirstWord)) {
        await HANDLERS.osOperations(partedCommand)
        return
    }

    if (COMMANDS.navigation.includes(commandFirstWord)){
        await HANDLERS.navigation(partedCommand)
        return
    }

    if (commandFirstWord === COMMANDS.hash) {
        const hexHash = await HANDLERS.hash(partedCommand)
        console.log(hexHash)
        return
    }

    if (COMMANDS.compressing.includes(commandFirstWord)) {
        await HANDLERS.compressing(partedCommand)
        return
    }

    if (COMMANDS.fileOperations.includes(commandFirstWord)) {
        await HANDLERS.fileOperations(partedCommand)
        return
    }

    throwInputError()
}