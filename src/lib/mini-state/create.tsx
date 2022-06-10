import * as React from "react";
import type { CreateCTXProps, Reducer } from "./types";

/**
 * Create Context with the help of createCTX() custom context creator
 * @param props 
 * ```ts
 * export interface CreateContext<State, Action> {
    type?: 'useState' | 'useReducer'
    reducer?: Reducer<State, Action>;
    initialState: State;
}
* ```
- type - default is `useState`
- reducer - is a function 
- initialState - state 
 * @returns `Context` and `Provider`
 */

function createCTX<State, Action>(props: CreateCTXProps<State, Action>) {
  const { reducer, initialState, type = "useState" } = props;

  if (type === "useReducer" && typeof reducer === "undefined") {
    throw new Error("You forget to add reducer in createCTX");
  }
  if (type === "useReducer" && typeof initialState === "undefined") {
    throw new Error("You forget to initilize your initialState");
  }
  if (type === "useState" && typeof initialState === "undefined") {
    throw new Error("You forget to initilize your initialState");
  }
  switch (type) {
    // @ts-ignore
    case "useReducer": {
      if (typeof reducer !== "undefined") {
        const defaultDispatch: React.Dispatch<Action> = () => initialState;
        const Context = React.createContext({
          state: initialState,
          dispatch: defaultDispatch,
        });
        /**************************
        Provider
        ***************************/
        const Provider = (props: React.PropsWithChildren<{}>) => {
          const [state, dispatch] = React.useReducer<Reducer<State, Action>>(
            reducer,
            initialState
          );
          return (
            <Context.Provider value={{ state, dispatch }} {...props}>
              {props.children}
            </Context.Provider>
          );
        };
        return [Context, Provider] as const;
      }
    }
    case "useState": {
      const defaultDispatch: React.Dispatch<React.SetStateAction<State>> = () =>
        initialState;
      const Context = React.createContext({
        state: initialState,
        dispatch: defaultDispatch,
      });
      /**************************
      Provider
      ***************************/
      const Provider = (props: React.PropsWithChildren<{}>) => {
        const [state, dispatch] = React.useState(initialState);
        return (
          <Context.Provider value={{ state, dispatch }} {...props}>
            {props.children}
          </Context.Provider>
        );
      };
      return [Context, Provider] as const;
    }
    default:
      throw new Error("Problem in creating context");
  }
}

export default createCTX;
