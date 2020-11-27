export const kebabcase = (string) => {
    return string.replace(/\s+/g, '-').toLowerCase();
}