import {handleNavigation} from "./navigation/handleNavigation.js";
import {handleOsOperation} from "./osOperations/handleOsOperation.js";
import {handleCompressing} from "./compressing/handleCompressing.js";
import {handleFileOperations} from "./fileOperations/handleFileOperations.js";

export const COMMANDS = {
    navigation: ['ls','up','cd'],
    compressing: ['compress', 'decompress'],
    fileOperations:['cat', 'add', 'rn', 'cp', 'mv', 'rm'],
    osOperations: ['eol', 'cpus', 'homedir', 'username', 'architecture']
}

export const HANDLERS = {
    navigation: handleNavigation,
    osOperations: handleOsOperation,
    compressing: handleCompressing,
    fileOperations: handleFileOperations
}