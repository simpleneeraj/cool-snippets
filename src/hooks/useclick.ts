
import React from 'react';
import useEventListener from './useEventListener'

type Handler = (event: MouseEvent) => void

function useOnClickOutside<T extends HTMLElement = HTMLElement>(handler: Handler) {
    const elementRef = React.useRef(null);
    useEventListener('mousedown', event => {
        const el = elementRef?.current as unknown as T
        // Do nothing if clicking ref's element or descendent elements
        if (!el || el.contains(event.target as Node)) {
            return
        }
        handler(event)
    })
    return elementRef
}

export default useOnClickOutside
