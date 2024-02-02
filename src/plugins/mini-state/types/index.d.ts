import React from 'react';

type IChildren<T> = React.PropsWithChildren<T>;
type Reducer<S, A> = React.Reducer<S, A>;
type Dispatch<A> = React.Dispatch<A>;

type Dispatch<T> = React.Dispatch<React.SetStateAction<T>>;

interface ContextType<State> {
  state: State;
  dispatch: Dispatch<any>; // Update the dispatch type as React.Dispatch<A>
}

interface ActionType<P = any> {
  type: string;
  payload?: P;
  [K: string]: any;
}

interface ReducerMap<S> {
  [K: string]: (state: S, action: ActionType) => S;
}

interface ActionCreator<P = any> {
  [K: string]: (payload: P) => void;
}

interface CreateSliceTypes<S> {
  name: string;
  initialState: S;
  reducer: ReducerMap<S>;
}

export {
  IChildren as C,
  Reducer as R,
  Dispatch as D,
  Dispatch,
  ContextType,
  ActionType,
  ReducerMap,
  ActionCreator,
  CreateSliceTypes,
};
