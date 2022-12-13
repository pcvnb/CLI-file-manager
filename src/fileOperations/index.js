import {appendFile} from "fs/promises";
import path from "path";
import {createReadStream, createWriteStream} from "fs";
import {rename as promisesRename} from "fs/promises";

export const cat = async () => {
    const path = 'C:/diskd/test.txt'
    const readableStream = await createReadStream(path)
    await readableStream.pipe(process.stdout)
};

export const add = async () => {
    const fileName = 'dima.txt'
    await appendFile(path.join(currentDirectory, fileName), '')
};

export const move = async () => {
    const currentPath = 'C:/diskd/testMove.txt'
    const newPath = 'C:/diskd/musor/testMove.txt'
    const readable = createReadStream(currentPath);
    const writable = createWriteStream(newPath);
    readable.pipe(writable);
    await rm(currentPath)
    console.log('moved')
};

export const copy = () => {
    const currentPath = 'C:/diskd/dima2.txt'
    const newPath = 'C:/diskd/dima2copy.txt'
    const readable = createReadStream(currentPath);
    const writable = createWriteStream(newPath);
    readable.pipe(writable);
};

export const remove = async () => {
    const currentPath = 'C:/diskd/testRemove.txt'
    await remove(currentPath)
};

export const rename = async () => {
    const filePath = 'C:/diskd/dima.txt'
    const newFileName = 'dima2.txt'
    const newFilePath = path.join(filePath, '..', newFileName);
    await promisesRename(filePath, newFilePath)
};