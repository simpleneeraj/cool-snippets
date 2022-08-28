import React from 'react';

interface OptionsTypes {
    text: any;
    value: any;
}

interface SelectProps extends React.ComponentPropsWithRef<'select'> {
    options: OptionsTypes[];
    // defaultOptions: string | number | undefined;
    onSelect?: (value: string) => void;
}