import {compress, decompress} from "./index.js";

export const handleCompressing = async (answer) => {
    if (answer === 'compress') {
        await compress()
    } else if (answer === 'decompress') {
        await decompress()
    }
};