import store from "store";
/**
 * Get Root State of application
 */
type RootState = ReturnType<typeof store.getState>


type both = string | number
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
    padding: both;
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
    fontSize: both;
    fontWeight: string;
    fontFace: string;
    lineHeight: both;
    letterSpacing: both;
}
// DownloadImage Types
interface DownloadImageTypes {
    pixelRatio: both;
    imageFormat: string;
}

// Post type
interface PostTypes {
    cornerRadius: number;
    blurRadius: number;
    alpha: number;
}