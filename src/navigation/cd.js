import path from "path";
import {currentPathObject} from "../currentPathObject.js";

export const cd = (newPath) => {
    if (path.isAbsolute(newPath)) {
        return newPath
    }
    return path.join(currentPathObject.getCurrentPath(), newPath)
}