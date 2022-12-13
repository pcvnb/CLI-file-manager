import {readFile} from "fs/promises";
import {createHash} from "crypto";

export const hash = async () => {
    const filePath = 'C:/diskd/testHash.txt'
    const content = await readFile(filePath, { encoding: 'utf8' });
    const hash = createHash('sha256').update(content)
    return hash.digest('hex')
};