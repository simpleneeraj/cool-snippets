import store from "store";
/**
 * Get Root State of application
 */
type RootState = ReturnType<typeof store.getState>

interface ActionType {
    type: string,
    payload: any
}
/**************************
State Types
***************************/
// Background Types
interface BackgroundTypes {
    source: string;
    aspectRatio: string;
    padding: string;
}
// Code Types
interface CodeTypes {
    codeValue: string;
}
// Dock Types
interface DockTypes {
    dockComponetKey: string;
    toggleDock: boolean;
}
// Preference Types 
interface PreferenceTypes {
    theme: string;
    mode: string;
    lineNumbers: boolean
}
// Text Types
interface TextTypes {
    fontSize: string;
    fontWeight: string;
    fontFace: string;
    lineHeight: string;
    letterSpacing: string;
}
// DownloadImage Types
interface DownloadImageTypes {
    pixelRatio: string;
    imageFormat: string;
}