import codemirrorThemes from "lib/themes";

const getTheme = (themeValue: string) => {
    let theme = codemirrorThemes.find((str) => str === themeValue)
    return theme
}


export default getTheme;