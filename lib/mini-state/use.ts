import React from "react";
import { ContextType } from "./types";


const useCTX = <State>(context: React.Context<ContextType<State>>) => {
    const { state, dispatch } = React.useContext<ContextType<State>>(context);
    return { state, dispatch }
}
export default useCTX;