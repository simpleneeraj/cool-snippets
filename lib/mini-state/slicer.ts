import { CreateSliceTypes } from "./types"
import createReducer from "./utils/create"
/**
 * A function that accepts an initial state, an object full of reducer
 * functions, and automatically generates
 * action creators and action types that correspond to the
 * reducers and state.
 *
 * `initialState` and `reducer` argument is passed to `slicer()`.
 * 
 */
const slicer = <S>({ initialState, reducer: reducerMap, name }: CreateSliceTypes<S>) => {
    // Empty Object 
    const emptyObject = {}
    // Reducer Object to Array 
    const reducerObject = Object.entries(reducerMap)
    // Reduce Function to iterate key from reducer
    const actionCreators = reducerObject.reduce((_, [key]) => {
        // GENERATOR
        const actionCreator = {
            [key]: (payload: typeof _) => ({ type: key, payload: payload })
        }
        return Object.assign(emptyObject, actionCreator)
    }, emptyObject as any)
    return {
        // Need More Learnigs
        actions: actionCreators,
        initialState: initialState as S,
        reducer: createReducer(initialState, reducerMap),
    }
}

export default slicer