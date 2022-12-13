import path from "path";
import {createBrotliCompress, createBrotliDecompress} from "zlib";
import {createReadStream, createWriteStream} from "fs";

export const compress = async () => {
    const filePath = 'C:/diskd/testCompress.txt'
    const zippedFilePath = "C:/diskd/testCompress.txt.br"
    const brotliCompress = createBrotliCompress();
    const source = createReadStream(filePath);
    const destination = createWriteStream(zippedFilePath);
    await source.pipe(brotliCompress).pipe(destination) //обернуть в промис
};

export const decompress = async () => {
    const sourcePath = path.join('C:/diskd/testCompress.txt.br')
    const destinationPath = path.join('C:/diskd/testCompress.txt')
    const source = createReadStream(sourcePath);
    const destination = createWriteStream(destinationPath);
    const brotliDecompress = createBrotliDecompress();
    await source.pipe(brotliDecompress).pipe(destination)
};