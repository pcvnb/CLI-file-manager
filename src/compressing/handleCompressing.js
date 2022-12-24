import {compress, decompress} from "./index.js";
import {getDoAllPathsExist} from "../helpers.js";
import {throwOperationError} from "../constants.js";

export const handleCompressing = async (partedCommand) => {
    const [commandType, sourcePath, destinationPath] = partedCommand;

    const doPathsExist = await getDoAllPathsExist([sourcePath, destinationPath])
    if (!doPathsExist) {
       throwOperationError()
    }

    if (commandType === 'compress') {
        await compress(sourcePath, destinationPath)
    } else if (commandType === 'decompress') {
        await decompress(sourcePath, destinationPath)
    }
};