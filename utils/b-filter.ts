const backgroundFilter = (value: string) => {
    const REGEX_URL =
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
    const REGEX_COLOR = /gradient|#|rgb|hsl/g;
    if (RegExp(REGEX_URL).test(value)) {
        return `url(${value})`;
    }
    if (RegExp(REGEX_COLOR).test(value)) {
        return value;
    } else {
        return `url(${value})`;
    }
};

export default backgroundFilter;