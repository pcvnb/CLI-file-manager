import {appendFile} from "fs/promises";
import path from "path";
import {createReadStream, createWriteStream, rm as remove} from "fs";
import {rename} from "fs/promises";
import {currentPathObject} from "../currentDirectory.js";


export const cat = async (path) => {
    const readableStream = await createReadStream(path)
    await readableStream.pipe(process.stdout)
};

export const add = async (fileName) => {
    await appendFile(path.join(currentPathObject.getCurrentPath(), fileName), '')
};

export const mv = async (currentPath, newPath) => {
    await cp(currentPath, newPath)
    await rm(currentPath)
    console.log('moved')
};

export const cp = (currentPath, newPath) => {
    const readable = createReadStream(currentPath);
    const writable = createWriteStream(newPath);
    readable.pipe(writable);
};

export const rm = async (path) => {
    await remove(path, (error) => {
        if (error) console.log(error)
    })
};

export const rn = async (pathToFile, newFileName) => {
    const newFilePath = path.join(pathToFile, '..', newFileName);
    await rename(pathToFile, newFilePath)
};