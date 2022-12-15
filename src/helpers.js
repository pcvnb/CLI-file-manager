import {stat} from "fs/promises";

export const doesPathExist = async (path) => {
    try {
        await stat(path);
        return true;
    } catch {
        return false;
    }
}
