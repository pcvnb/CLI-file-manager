import {getArchitecture, getCpus, getEol, getHomedir, getUserName} from "./index.js";

export const handleOsOperation = (answer) => {
    if (answer === 'eol') {
        getEol()
    } else if (answer === 'cpus') {
        getCpus()
    } else if (answer === 'homedir') {
        getHomedir()
    } else if (answer === 'username') {
        getUserName()
    } else if (answer === 'architecture') {
        getArchitecture()
    }
};