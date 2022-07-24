import React from 'react';
import useIsoEffect from './useIsoEffect';
const useInterval = (callback: () => void, delay: number) => {
    const savedCallback = React.useRef(callback)


    useIsoEffect(() => {
        savedCallback.current = callback
    }, [callback])


    React.useEffect(() => {
        if (!delay && delay !== 0) {
            return
        }
        const interval = setInterval(() => savedCallback.current(), delay)
        return () => clearInterval(interval)
    }, [delay])
    // Return Values
    return {}

}
export default useInterval;