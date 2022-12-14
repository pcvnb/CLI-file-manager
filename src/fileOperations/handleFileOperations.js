import {cat, move, add, rename, copy, remove} from "./index.js";

export const handleFileOperations = async (partedCommand) => {
    const commandType = partedCommand[0];
    const paths = partedCommand.slice(1)
    const pathToFile = paths[0];
    const newPath = paths.length === 2 ? paths[1] : null;

    if (commandType === 'cat') {
        await cat(pathToFile)
    } else if (commandType === 'add') {
        await add(pathToFile)
    } else if (commandType === 'rn') {
        await rename(pathToFile, newPath)
    } else if (commandType === 'copy') {
        copy(pathToFile, newPath)
    } else if (commandType === 'move') {
        await move(pathToFile, newPath)
    } else if (commandType === 'rm') {
        await remove(pathToFile)
    }
};