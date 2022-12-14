import {compress, decompress} from "./index.js";

export const handleCompressing = async (partedCommand) => {
    const [commandType, source, destination] = partedCommand;
    if (commandType === 'compress') {
        await compress(source, destination)
    } else if (commandType === 'decompress') {
        await decompress(source, destination)
    }
};