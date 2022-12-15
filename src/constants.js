import {handleNavigation} from "./navigation/handleNavigation.js";
import {handleOsOperation} from "./osOperations/handleOsOperation.js";
import {handleCompressing} from "./compressing/handleCompressing.js";
import {handleFileOperations} from "./fileOperations/handleFileOperations.js";
import {handleHash} from "./hash/handleHash.js";

export const COMMANDS = {
    navigation: ['ls','up','cd'],
    compressing: ['compress', 'decompress'],
    fileOperations:['cat', 'add', 'rn', 'cp', 'mv', 'rm'],
    osOperations: ['os'],
    hash: 'hash',
    exit: '.exit',
}

export const HANDLERS = {
    navigation: handleNavigation,
    compressing: handleCompressing,
    fileOperations: handleFileOperations,
    osOperations: handleOsOperation,
    hash: handleHash,
}

const operationErrorText = 'FS operation failed'
const inputErrorText = 'Invalid input'

export const throwInputError = () => {
    throw new Error(inputErrorText)
}

export const throwOperationError = () => {
    throw new Error(operationErrorText)
}