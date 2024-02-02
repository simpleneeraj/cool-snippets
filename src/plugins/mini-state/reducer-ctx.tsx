import React from 'react';
import { R, D, C } from './types';

/**
 * This function gives you ability to create context in simple way
 * @returns
 * `Context` and `Provider`
 *
 */
function createReducerContext<S, A>(reducer: R<S, A>, defaultState: S) {
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

export default createReducerContext;
