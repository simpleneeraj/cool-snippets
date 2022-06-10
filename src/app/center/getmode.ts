import codemodes from "lib/modes";

// // http://codemirror.net/doc/manual.html#config
async function getMode(modeName: string) {
    // const mode = CodeMirror.findModeByName(opt.mode || "");
    const findMode = codemodes.find((data) => data.mode === modeName);
    if (codemodes && codemodes && findMode?.mode) {
        await require(`codemirror/mode/${findMode?.mode}/${findMode?.mode}.js`);
        return true;
    }
}

export default getMode;