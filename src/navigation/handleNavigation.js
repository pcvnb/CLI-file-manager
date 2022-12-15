import {ls} from "./ls.js";
import {up} from "./up.js";
import {cd} from "./cd.js";
import {currentPathObject} from "../currentPathObject.js";
import {doesPathExist} from "../helpers.js";
import {throwOperationError} from "../constants.js";

export const handleNavigation = async (partedCommand) => {
    const [commandType, pathToFile] = partedCommand;

    if (commandType === 'up') {
        const newDirectory = up(currentPathObject.getCurrentPath())
        currentPathObject.changeCurrentPath(newDirectory)
        return
    }

    if (commandType === 'cd') {
        const newPath = cd(pathToFile)
        const doesNewPathExist = await doesPathExist(newPath)

        if (!doesNewPathExist) {
            throwOperationError()
        }

        currentPathObject.changeCurrentPath(newPath)
        return
    }

    if (commandType === 'ls') {
        const listOfFiles = await ls(currentPathObject.getCurrentPath())
        console.table(listOfFiles)
    }

};