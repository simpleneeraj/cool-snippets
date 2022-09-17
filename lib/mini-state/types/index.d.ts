import React from "react"


type C<T> = React.PropsWithChildren<T>;
type R<S, A> = React.Reducer<S, A>;
type D<A> = React.Dispatch<A>;


type Dispatch<T> = React.Dispatch<React.SetStateAction<T>>;


interface ContextType<State> {
    state: State;
    dispatch: any;
}



interface ActionType {
    type: string;
    payload?: any;
    [K: string]: any
}

interface ReducerMap<S> {
    [K: string]: (state: S, action: ActionType) => S
}
interface ActionCretor<Action> {
    [K: string]: (payload: Action) => void
}
interface CreateSliceTypes<S> {
    name: string;
    initialState: S;
    reducer: ReducerMap<S>;
}
