import React from "react";
import useOnClickOutside from "hooks/useclick";

const useSearchImages = (dispatch: (value: string) => void) => {
    const [focus, updateFocus] = React.useState(false);
    const searchRef = React.useRef<HTMLInputElement>(null);

    const onFocus = React.useCallback(() => {
        updateFocus(true);
    }, []);
    const onBlur = React.useCallback(() => {
        updateFocus(false);
    }, []);

    const searchStyle = {
        button: {
            minWidth: focus ? "180px" : "56px",
            transition: "all 200ms ease 0s",
        },
        input: {
            transition: "all 200ms ease 0s",
            width: focus ? "100%" : "0",
            padding: focus ? ".4rem" : "0rem",
        },
    };

    const containerRef = useOnClickOutside(() => onBlur());

    const onSubmit = React.useCallback((e: React.SyntheticEvent) => {
        e.preventDefault();
        const value = searchRef.current?.value;
        if (value) dispatch(value)
    }, [dispatch]);

    return {
        searchRef,
        onSubmit,
        focus,
        onFocus,
        onBlur,
        containerRef,
        searchStyle,
    };
};


export default useSearchImages;