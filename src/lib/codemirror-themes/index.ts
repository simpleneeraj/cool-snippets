
import nord from "./nord";
import abcdef from "./abcdef";
import bespin from "./bespin";
import dracula from "./dracula";
import eclipse from "./eclipse";
import sublime from "./sublime";
import okaidia from "./okaidia";
import oneDark from "./one-dark";
import basicDark from "./basic-dark";
import basicLight from "./basic-light";
import gruvboxDark from "./gruvbox-dark";
import gruvboxLight from "./gruvbox-light";
import materialDark from "./material-dark";
import solarizedDark from "./solarized-dark";
import solarizedLight from "./solarized-light";
import { duotoneDark, duotoneLight } from "./duotone";

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
    "one-dark": oneDark,
    "solarized-dark": solarizedDark,
    "solarized-light": solarizedLight,
    "sublime": sublime,
}


export const themesList = Object.keys(codeMirrorThemes)
export default codeMirrorThemes;  