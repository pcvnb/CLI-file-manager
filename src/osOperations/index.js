import {EOL, userInfo, arch, cpus} from "os";

const currentUserInfo = userInfo()

export const getArchitecture = () => {
    return arch()
};

export const getCpus = () => {
    return cpus()
};

export const getEol = () => {
    return JSON.stringify(EOL)
};

export const getHomedir = () => {
    return currentUserInfo.homedir
};

export const getUserName = () => {
    return currentUserInfo.username
};