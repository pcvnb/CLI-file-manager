import path from "path";

export const up = (currentDirectory) => {
    return path.join(currentDirectory, '..')
}