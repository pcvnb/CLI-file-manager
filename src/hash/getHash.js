import {readFile} from "fs/promises";
import {createHash} from "crypto";

export const getHash = async (filePath) => {
    const content = await readFile(filePath, { encoding: 'utf8' });
    const hash = createHash('sha256').update(content)
    return hash.digest('hex')
};