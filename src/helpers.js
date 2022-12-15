import {stat} from "fs/promises";

export const doesPathExist = async (path) => {
    try {
        await stat(path);
        return true;
    } catch {
        return false;
    }
}

export const promisifiedPipe = (source, destination) => {
    return new Promise((resolve)=>{
        source.on('end',()=>{
            resolve();
        }).pipe(destination)
    });
}

export const getDoAllPathsExist = async (paths) => {
    const [pathsExist] = await Promise.all(paths.map(doesPathExist));

    for (const doPathExist of pathsExist) {
        if (!doPathExist) {
            return false
        }
    }

    return true
}