import React from "react";
import { R, D, C } from "./types";

/**
 * This function gives you ability to create context in simple way
 * @returns
 * `Context` and `Provider`
 *
 */
function createReducerCTX<S, A>(reducer: R<S, A>, defaultState: S) {
  if (typeof reducer === "undefined") {
    throw new Error("Add reducer in your createReducerContext");
  }
  if (typeof defaultState === "undefined") {
    throw new Error("Add initialState to createReducerContext");
  }
  const defaultDispatch: D<A> = () => defaultState;
  const Context = React.createContext({
    state: defaultState,
    dispatch: defaultDispatch,
  });

  const Provider = (props: C<{ default?: S }>) => {
    const init = props.default ? props.default : defaultState;
    const [state, dispatch] = React.useReducer<R<S, A>>(reducer, init);
    return <Context.Provider value={{ state, dispatch }} {...props} />;
  };
  return [Context, Provider] as const;
}

export default createReducerCTX;
