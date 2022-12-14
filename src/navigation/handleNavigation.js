import {ls} from "./ls.js";
import {up} from "./up.js";
import {cd} from "./cd.js";
import {currentPathObject} from "../currentDirectory.js";

export const handleNavigation = async (answer) => {
    if (answer === 'up') {
        const newDirectory = up(currentPathObject.getCurrentPath())
        currentPathObject.changeCurrentPath(newDirectory)
        return
    }
    if (answer === 'cd') {
        const newDirectory = cd()
        currentPathObject.changeCurrentPath(newDirectory)
        return
    }
    console.table(await ls(currentPathObject.getCurrentPath()))
};