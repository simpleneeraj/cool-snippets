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


interface ActionKeys extends ActionType {
    payload: {
        key: any;
        value: any;
    }
}
/**************************
State Types
***************************/
// Background Types
interface BackgroundTypes {
    source: string;
    aspectRatio: string;
    padding: number;
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
    lineNumbers: boolean;
    autoCompletion: boolean;
    translucent: boolean;
    draggable: boolean;
    editable: boolean;

}
// Text Types
interface TextTypes {
    fontSize: number;
    fontWeight: number;
    fontFace: string;
    lineHeight: number;
    letterSpacing: number;
}
// DownloadImage Types
interface DownloadImageTypes {
    pixelRatio: number;
    imageFormat: string;
    fileName: string;
}

// Post type
interface PostTypes {
    cornerRadius: number;
    blurRadius: number;
    alpha: number;
}