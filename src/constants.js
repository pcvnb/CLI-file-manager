import {handleNavigation} from "./navigation/handleNavigation.js";
import {handleOsOperation} from "./osOperations/handleOsOperation.js";
import {handleCompressing} from "./compressing/handleCompressing.js";
import {handleFileOperations} from "./fileOperations/handleFileOperations.js";
import {handleHash} from "./hash/handleHash.js";

export const COMMANDS = {
    navigation: ['ls','up','cd'],
    compressing: ['compress', 'decompress'],
    fileOperations:['cat', 'add', 'rn', 'cp', 'mv', 'rm'],
    osOperations: ['eol', 'cpus', 'homedir', 'username', 'architecture'],
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