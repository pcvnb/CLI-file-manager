import {EOL, userInfo, arch, cpus} from "os";


export const getArchitecture = () => {
    console.log(arch())
};

export const getCpus = () => {
    console.log(cpus())
};


export const getEol = () => {
    console.log(EOL)
};

const currentUserInfo = userInfo()
export const getHomedir = () => {
    console.log(currentUserInfo.homedir)
};

export const getUserName = () => {
    console.log(currentUserInfo.username)
};