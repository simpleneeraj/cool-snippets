import React from 'react';

import Cookies from 'js-cookie'


type C = Cookies.CookieAttributes

const useCookie = (COOKIE_NAME: string) => {

    const [isCookie, updateIsCookie] = React.useState(false);

    React.useEffect(() => {
        const right = Cookies.get(COOKIE_NAME)
        if (!right) {
            updateIsCookie(true)
        }
    }, [COOKIE_NAME])

    const setCookies = React.useCallback((value: string, options?: C) => {
        Cookies.set(COOKIE_NAME, value, options)
        updateIsCookie(false)
    }, [COOKIE_NAME])
    const clearCookies = React.useCallback((options?: C) => {
        Cookies.remove(COOKIE_NAME, options)
    }, [COOKIE_NAME])


    return { setCookies, isCookie, clearCookies }
}
export default useCookie;