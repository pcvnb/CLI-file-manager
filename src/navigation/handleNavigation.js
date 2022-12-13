import {ls} from "./ls.js";
import {up} from "./up.js";
import {cd} from "./cd.js";

export const handleNavigation = async (answer, currentDirectory, changeCurrentDirectory) => {
    if (answer === 'up') {
        const newDirectory = up(currentDirectory)
        changeCurrentDirectory(newDirectory)
        return
    }
    if (answer === 'cd') {
        const newDirectory = cd()
        changeCurrentDirectory(newDirectory)
        return
    }
    console.table(await ls(currentDirectory))
};