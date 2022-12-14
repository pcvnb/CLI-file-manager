import {getHash} from "./getHash.js";

export const handleHash = async (partedCommand) => {
    const filePath = partedCommand[1]
    const hash = await getHash(filePath)
    return hash
};