import {getArchitecture, getCpus, getEol, getHomedir, getUserName} from "./index.js";
import {throwInputError} from "../constants.js";

export const handleOsOperation = (partedCommand) => {
    const requiredInfo = partedCommand[1]
    if (requiredInfo === '--EOL') {
        console.log(getEol())
    } else if (requiredInfo === '--cpus') {
        const cpusData = getCpus()
        console.table(cpusData)
        console.log(`Overall amount of CPUS: ${cpusData.length}`)
    } else if (requiredInfo === '--homedir') {
        console.log(getHomedir())
    } else if (requiredInfo === '--username') {
        console.log(getUserName())
    } else if (requiredInfo === '--architecture') {
        console.log(getArchitecture())
    } else {
        throwInputError()
    }
};