import {getHash} from "./getHash.js";
import {doesPathExist} from "../helpers.js";
import {throwOperationError} from "../constants.js";

export const handleHash = async (partedCommand) => {
    const filePath = partedCommand[1]

    const doesHashedFilePathExist = await doesPathExist(filePath)
    if (!doesHashedFilePathExist) {
        throwOperationError()
    }
    const hash = await getHash(filePath)
    return hash
};