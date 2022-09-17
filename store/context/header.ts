import { createReducerCTX, slicer } from "lib/mini-state";

type StateType = {
    isNav: boolean;

}

const headerSlice = slicer<StateType>({
    name: 'Header',
    initialState: {
        isNav: false,
    },
    reducer: {
        toggle: (state, action) => {
            return { ...state, isNav: action.payload }
        },
    },
})


const { actions, initialState, reducer } = headerSlice


const [HeaderContext, HeaderProvider] =
    createReducerCTX(reducer, initialState)

export { HeaderContext, HeaderProvider, actions as headerActions, }


