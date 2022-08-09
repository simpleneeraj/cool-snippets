import React from 'react';



type Button = React.ComponentPropsWithRef<'button'>
type Container = React.ComponentPropsWithRef<'div'>


interface CommonForButton {
    hover?: boolean | undefined;
    label?: string | undefined;
    direction?: 'row' | 'column'
    size?: 'square' | 'reactangle' | string
    active?: 'static' | 'clicked' | 'translate' | null;
    disabled?: 'no-action' | 'reduce-opacity'
}


interface ButtonProps extends CommonForButton, Button {
}



interface GroupProps extends Container {

}




interface StepperButtonProps extends CommonForButton {
    min: number | undefined;
    max: number | undefined;
    step: number | undefined;
    onStepper: (value: number) => void;
    defaultValue: number;
}
