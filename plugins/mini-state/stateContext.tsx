import React, { Dispatch } from "react";

/**
 * This function gives you ability to create context in simple way
 * @returns
 * `Context` and `Provider`
 *
 */
function createStateCTX<State>(initialState: State) {
  const defaultDispatch: Dispatch<typeof initialState> = () => initialState;
  const Context = React.createContext({
    state: initialState,
    dispacth: defaultDispatch,
  });
  const Provider = (props: React.PropsWithChildren<{}>) => {
    const [state, dispacth] = React.useState<State>(initialState);
    return <Context.Provider value={{ state, dispacth }} {...props} />;
  };
  return [Context, Provider] as const;
}

export default createStateCTX;
