import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "typings/store";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default useAppSelector;

// const selfSelector = (state: RootState) => state
// const _draft = draftSelector(selfSelector, selector)
// const x=useSelector()

// : unknown

// const useAppSelector = <unknown, unknown>() => {

//     const returnState = useSelector()

//     // Return Values
//     return returnState

// }



// function useAppSelector<unknown, unknown>(selector: (state: unknown) => unknown, equalityFn?: EqualityFn<unknown> | undefined): unknown {
//     let x = useSelector(selector, equalityFn)
//     return x
// }


// const _draft = draftSelector((s: RootState) => s, (s: RootState) => s.code)