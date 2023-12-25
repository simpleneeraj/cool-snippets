
import React from 'react';


interface ModelProps extends
    React.ComponentPropsWithRef<'div'> {
    model: boolean;
    onClose?: () => void;

}