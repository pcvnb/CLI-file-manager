import {ls} from "./ls.js";
import {up} from "./up.js";
import {cd} from "./cd.js";
import {currentPathObject} from "../currentDirectory.js";

export const handleNavigation = async (partedCommand) => {
    const [commandType, pathToFile] = partedCommand;
    if (commandType === 'up') {
        const newDirectory = up(currentPathObject.getCurrentPath())
        currentPathObject.changeCurrentPath(newDirectory)
        return
    }
    if (commandType === 'cd') {
        const newPath = cd(pathToFile)
        currentPathObject.changeCurrentPath(newPath)
        return
    }

    if (commandType === 'ls') {
        const listOfFiles = await ls(currentPathObject.getCurrentPath())
        console.table(listOfFiles)
    }

};