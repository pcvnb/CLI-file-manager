import path from "path";
import {createBrotliCompress, createBrotliDecompress} from "zlib";
import {createReadStream, createWriteStream} from "fs";

export const compress = () => {
    const filePath = 'C:/diskd/testCompress.txt'
    const zippedFilePath = "C:/diskd/testCompress.txt.br"
    const brotliCompress = createBrotliCompress();
    const source = createReadStream(filePath);
    const destination = createWriteStream(zippedFilePath);
    source.pipe(brotliCompress).pipe(destination)
};

export const decompress = () => {
    const sourcePath = path.join('C:/diskd/testCompress.txt.br')
    const destinationPath = path.join('C:/diskd/testCompress.txt')
    const source = createReadStream(sourcePath);
    const destination = createWriteStream(destinationPath);
    const brotliDecompress = createBrotliDecompress();
    source.pipe(brotliDecompress).pipe(destination)
};