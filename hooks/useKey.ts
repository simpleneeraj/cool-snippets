import React from 'react';


// type keyCodeType=[]
/**
 * Custom Hook for Keyboard Events
 * @param keyCode 
 * @param callback 
 * @returns 
 */
const useKey = (keyCode: unknown, callback: any) => {
    const callbackRef = React.useRef(callback)

    React.useEffect(() => {
        callbackRef.current = callback
    }, [callback])


    React.useEffect(() => {
        function keyHandler(event: KeyboardEvent) {
            if (event.key === keyCode) {
                callbackRef.current(event)
                // Multiple Keys
            }
            // event.preventDefault()
            console.log("keyCode", event.key);
        }
        document.addEventListener('keydown', keyHandler)
        return () => document.removeEventListener('keydown', keyHandler)
    }, [keyCode])
    // Return Values
    return callback

}
export default useKey;



// console.log("Code", event.code);
// console.log("Key", event.key);