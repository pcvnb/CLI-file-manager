import {compress, decompress} from "./index.js";

export const handleCompressing = (answer) => {
    if (answer === 'compress') {
        compress()
    } else if (answer === 'decompress') {
        decompress()
    }
};