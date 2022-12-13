import {cat, move, add, rename, copy, remove} from "./index.js";

export const handleFileOperations = async (answer) => {
    if (answer === 'cat') {
        await cat()
    } else if (answer === 'add') {
        await add()
    } else if (answer === 'rn') {
        await rename()
    } else if (answer === 'copy') {
        copy()
    } else if (answer === 'move') {
        await move()
    } else if (answer === 'rm') {
        await remove()
    }
};