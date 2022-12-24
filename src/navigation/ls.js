import {readdir} from "fs/promises";

const compare = (a, b) => {
    if (a.isDirectory() && b.isDirectory()
        || a.isFile() && b.isFile()) {
        return a.name.localeCompare(b.name, 'en', { sensitivity: 'base' });
    }
    else if (a.isFile() && b.isDirectory()) {
        return 1;
    }
    else if (a.isDirectory() && b.isFile()) {
        return -1;
    }
};

export const ls = async (currentDirectory) => {
    const files = await readdir(currentDirectory, {withFileTypes: true});
    const filteredFiles = files.filter(file => file.isDirectory() || file.isFile())
    const sortedFiles = filteredFiles.sort((a, b) => compare(a, b))
    const structuredFiles = sortedFiles.map(file => ({
        ...file,
        type: file.isDirectory() ? 'Directory' : 'File'
    }));
    return structuredFiles
}
