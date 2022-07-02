import codemodes from "lib/modes";

async function codemirrorModes(modeName: string) {
    // const mode = CodeMirror.findModeByName(opt.mode || "");
    const findMode = codemodes.find((data) => data.mode === modeName);
    if (codemodes && codemodes && findMode?.mode) {
        await require(`codemirror/mode/${findMode?.mode}/${findMode?.mode}.js`);
        return true;
    }
}

export default codemirrorModes;