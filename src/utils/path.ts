export const isValidPath = (path: string) => {
    const pathRegex = /^[a-zA-Z0-9-]+$/;

    if (path.trim() === "") return false;

    return pathRegex.test(path);
}