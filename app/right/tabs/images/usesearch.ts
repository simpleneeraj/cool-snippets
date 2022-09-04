import React from "react";

const useSearchImages = (dispatch: (value: string) => void) => {
    const searchRef = React.useRef<HTMLFormElement>(null);

    const onSubmit = React.useCallback((e: React.SyntheticEvent) => {
        e.preventDefault();
        const value = searchRef.current?.value;
        if (value) dispatch(value)
    }, [dispatch]);

    return {
        searchRef,
        onSubmit,
        focus,
    };
};


export default useSearchImages;