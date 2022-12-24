import {createBrotliCompress, createBrotliDecompress} from "zlib";
import {createReadStream, createWriteStream} from "fs";

export const compress = async (sourcePath, destinationPath) => {
    const brotliCompress = createBrotliCompress();
    const filePath = createReadStream(sourcePath);
    const zippedFilePath = createWriteStream(destinationPath);
    await filePath.pipe(brotliCompress).pipe(zippedFilePath)
};

export const decompress = async (sourcePath, destinationPath) => {
    const zippedFilePath = createReadStream(sourcePath);
    const unzippedFilePath = createWriteStream(destinationPath);
    const brotliDecompress = createBrotliDecompress();
    await zippedFilePath.pipe(brotliDecompress).pipe(unzippedFilePath)
};