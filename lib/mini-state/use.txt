import React from "react";
import { ContextType } from "./types";

/**
 * 
 * @param context 
 * @returns 
 * ```js
 * return {state, dispatch};
 * ```
 */
function useCTX<State>(context: any) {
    const { state, dispatch } = React.useContext<ContextType<State>>(context);
    return { state, dispatch }
}
export default useCTX;