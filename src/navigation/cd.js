import path from "path";

export const cd = (currentDirectory) => {
    const newPath = 'C:\\diskd'
    if (path.isAbsolute(newPath)) {
        return newPath
    }
    return path.join(currentDirectory, newPath)
}