import { createCTX } from "lib/mini-state";
import { ActionType } from "typings/store";

export interface SelectStateTypes {
    isOpenModel: boolean;
    selectedValue: string
}


const init: SelectStateTypes = {
    isOpenModel: false,
    selectedValue: ''
}
const selectSlice = {
    initialState: init,
    reducer: (state: SelectStateTypes, action: ActionType) => {
        switch (action.type) {
            case "TOGGLE":
                return { ...state, isOpenModel: action.payload };
            case "VALUE":
                return { ...state, selectedValue: action.payload };
            default:
                return state;
        }
    },
    action: {
        openModelhandler: (payload: any) => ({ type: 'TOGGLE', payload }),
        selectedValueHandler: (payload: any) => ({ type: 'VALUE', payload }),
    },
};

const [Context$Select, Provider$Select] = createCTX({
    type: "useReducer",
    reducer: selectSlice.reducer,
    initialState: selectSlice.initialState,
});


const { action } = selectSlice

export { Context$Select, Provider$Select, action }