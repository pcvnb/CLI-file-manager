import {createBrotliCompress, createBrotliDecompress} from "zlib";
import {createReadStream, createWriteStream} from "fs";

export const compress = async (source, destination) => {
    const brotliCompress = createBrotliCompress();
    const filePath = createReadStream(source);
    const zippedFilePath = createWriteStream(destination);
    await filePath.pipe(brotliCompress).pipe(zippedFilePath) //обернуть в промис
};

export const decompress = async (source, destination) => {
    const zippedFilePath = createReadStream(source);
    const unzippedFilePath = createWriteStream(destination);
    const brotliDecompress = createBrotliDecompress();
    await zippedFilePath.pipe(brotliDecompress).pipe(unzippedFilePath)
};