import {EOL, userInfo, arch, cpus} from "os";

const currentUserInfo = userInfo()

export const getArchitecture = () => {
    return arch()
};

export const getCpus = () => {
    const cpusInfo = cpus();
    const fixedInfo = cpusInfo.map(cpu => ({
        model: cpu.model,
        clockRate: cpu.model.split(' ').find(elem => elem.endsWith('GHz'))
    }))
    return fixedInfo
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