import {appendFile} from "fs/promises";
import path from "path";
import {createReadStream, createWriteStream, rm as remove} from "fs";
import {rename} from "fs/promises";
import {currentPathObject} from "../currentPathObject.js";
import {doesPathExist, getDoAllPathsExist, promisifiedPipe} from "../helpers.js";
import {throwOperationError} from "../constants.js";

export const cat = async (path) => {
    const readableStream = createReadStream(path)
    await promisifiedPipe(readableStream, process.stdout)
    console.log()
};

export const add = async (fileName) => {
    await appendFile(path.join(currentPathObject.getCurrentPath(), fileName), '')
};

export const mv = async (currentPath, newPath) => {
    await cp(currentPath, newPath)
    await rm(currentPath)
};

export const cp = (currentPath, newPath) => {
    const doPathsExist = getDoAllPathsExist([currentPath, newPath])

    if (!doPathsExist) {
        throwOperationError()
    }

    const readable = createReadStream(currentPath);
    const writable = createWriteStream(newPath);
    readable.pipe(writable);
};

export const rm = async (path) => {
    await remove(path, () => {
        throwOperationError()
    })
};

export const rn = async (pathToFile, newFileName) => {
    const newFilePath = path.join(pathToFile, '..', newFileName);
    const doesNewPathExist =  await doesPathExist(newFilePath)

    if (doesNewPathExist) {
        throwOperationError()
    }

    await rename(pathToFile, newFilePath)
};