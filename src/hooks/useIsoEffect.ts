import { useEffect, useLayoutEffect } from 'react'
const useIsoEffect =
    typeof window !== 'undefined' ? useLayoutEffect : useEffect
export default useIsoEffect
