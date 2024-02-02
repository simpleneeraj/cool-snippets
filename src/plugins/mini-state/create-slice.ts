import { createReducer } from './utils/create-reducer';

type ActionType<P = any> = {
  type: string;
  payload?: P;
  [K: string]: any;
};

export type Reducer<S> = (state: S, action: ActionType) => S;

interface ActionCreator<P = any> {
  (payload?: P): ActionType<P>;
}

interface Slice<S> {
  actions: Record<string, ActionCreator>;
  initialState: S;
  reducer: Reducer<S>;
}

function createSlice<S, A>(
  initialState: S,
  reducerMap: Record<string, Reducer<S>>
): Slice<S> {
  const actionCreators = {} as Record<string, ActionCreator>;

  Object.keys(reducerMap).forEach((key) => {
    actionCreators[key] = (payload) => ({
      type: key,
      payload,
    });
  });
  // @ts-expect-error
  const reducer = createReducer(reducerMap, initialState);

  return {
    actions: actionCreators,
    initialState,
    reducer,
  };
}

export default createSlice;
