import { createReducerCTX, createStateCTX } from "lib/mini-state";



const init = false

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'nav':
            return action.payload
        default:
            return state
    }
}
const [HeaderContext, HeaderProvider] = createReducerCTX(reducer, init)


export { HeaderContext, HeaderProvider }