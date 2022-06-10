import { SelectStateTypes } from "element/types";
import { ActionType } from "typings/store";

const init: SelectStateTypes = {
    isOpenModel: false,
    selectedValue: "",
    indexValue: 0,
};

const selectSlice = {
    initialState: init,
    reducer: (state: SelectStateTypes, action: ActionType) => {
        switch (action.type) {
            case "TOGGLE":
                return { ...state, isOpenModel: action.payload };
            case "VALUE":
                return { ...state, selectedValue: action.payload };
            case "INDEX":
                return { ...state, indexValue: action.payload };
            default:
                return state;
        }
    },
    action: {
        openModelhandler: (payload: any) => ({ type: "TOGGLE", payload }),
        selectedValueHandler: (payload: any) => ({ type: "VALUE", payload }),
        indexValueHandler: (payload: any) => ({ type: "INDEX", payload }),
    },
};


export default selectSlice;