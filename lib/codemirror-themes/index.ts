import { abcdef } from "./abcdef";
import { basicDark } from "./basic-dark";
import { basicLight } from "./basic-light";
import { bespin } from "./bespin";
import { dracula } from "./dracula";
import { duotoneDark, duotoneLight } from "./duotone";
import { eclipse } from "./eclipse";
import { gruvboxDark } from "./gruvbox-dark";
import { gruvboxLight } from "./gruvbox-light";
import { materialDark } from "./material-dark";
import { nord } from "./nord";
import { okaidia } from "./okaidia";
import { oneDarkTheme } from "./one-dark";
import { solarizedDark } from "./solarized-dark";
import { solarizedLight } from "./solarized-light";
import { sublime } from "./sublime";

const codeMirrorThemes = {
    "abcdef": abcdef,
    "basic-dark": basicDark,
    "basic-light": basicLight,
    "bespin": bespin,
    "dracula": dracula,
    "duotone-dark": duotoneDark,
    "duotone-light": duotoneLight,
    "eclipse": eclipse,
    "gruvbox-dark": gruvboxDark,
    "gruvbox-light": gruvboxLight,
    "material-dark": materialDark,
    "nord": nord,
    "okaidia": okaidia,
    "one-dark": oneDarkTheme,
    "solarized-dark": solarizedDark,
    "solarized-light": solarizedLight,
    "sublime": sublime,
}


export const themesList = Object.keys(codeMirrorThemes)
export default codeMirrorThemes;  