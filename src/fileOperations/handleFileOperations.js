import {cat, mv, add, cp, rm, rn} from "./index.js";
import {throwOperationError} from "../constants.js";

export const handleFileOperations = async (partedCommand) => {
    const [commandType, pathToFile, newPath] = partedCommand;
    if (!pathToFile) {
        throwOperationError()
    }

    if (commandType === 'cat') {
        await cat(pathToFile)
    } else if (commandType === 'add') {
        const fileName = pathToFile
        await add(fileName)
    } else if (commandType === 'rn') {
        const newFileName = newPath
        await rn(pathToFile, newFileName)
    } else if (commandType === 'cp') {
        cp(pathToFile, newPath)
    } else if (commandType === 'mv') {
        await mv(pathToFile, newPath)
    } else if (commandType === 'rm') {
        await rm(pathToFile)
    }
};