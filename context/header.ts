import { createStateCTX } from "lib/mini-state";

const [C, P] = createStateCTX(false)


export { C as HeaderContext, P as HeaderProvider }