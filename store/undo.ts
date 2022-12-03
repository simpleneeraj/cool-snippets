interface Action<T = any> {
    type: T
    payload?: any
}


export enum UndoxTypes {
    UNDO = 'CRYSTAL::UNDO',
    REDO = 'CRYSTAL::REDO',
}


interface RedoAction extends Action {
    readonly type: UndoxTypes.REDO
    payload?: number
}
type UndoxAction<A extends Action>
    = UndoAction
    | RedoAction
    | A

interface UndoAction extends Action {
    readonly type: UndoxTypes.UNDO
    payload?: number
}



interface Reducer<S = any, A extends Action = Action> {
    (state: S | undefined, action: A): S
}

const undoable = <S, A extends Action>(reducer: Reducer<S, A>) => {
    // Call the reducer with empty action to populate the initial state
    const initialState = {
        past: [],
        present: reducer(undefined, {} as any),
        future: []
    }

    //   const initial = reducer(undefined, initAction)

    // Return a reducer that handles undo and redo
    return function (state = initialState, action: UndoxAction<A>) {
        const { past, present, future } = state
        switch (action.type) {
            case UndoxTypes.UNDO:
                const previous = past[past.length - 1]
                const newPast = past.slice(0, past.length - 1)
                return {
                    past: newPast,
                    present: previous,
                    future: [present, ...future]
                }
            case UndoxTypes.REDO:
                const next = future[0]
                const newFuture = future.slice(1)
                return {
                    past: [...past, present],
                    present: next,
                    future: newFuture
                }
            default:
                // Delegate handling the action to the passed reducer
                const newPresent = reducer(present, action as any)
                if (present === newPresent) {
                    return state
                }
                return {
                    past: [...past, present],
                    present: newPresent,
                    future: []
                }
        }
    }
}

export default undoable