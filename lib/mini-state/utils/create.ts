import { ActionType, ReducerMap } from "../types";

const createReducer = <S>(initiateState: S, reducerMap: ReducerMap<S>) => {
    return function (state: S, action: ActionType) {
        const currentState = state !== undefined ? state : initiateState;
        const handler = reducerMap[action.type];
        return handler ? handler(currentState, action) : currentState;
    };
};

export default createReducer;