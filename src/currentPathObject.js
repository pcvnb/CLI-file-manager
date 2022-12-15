import {homedir} from "os";

let currentPath = homedir();

const currentPathObject = {
    getCurrentPath() {
        return currentPath
    },

    changeCurrentPath(newPath) {
        currentPath = newPath
    },

};

Object.freeze(currentPathObject);
export { currentPathObject };