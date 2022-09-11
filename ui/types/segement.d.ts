import React from 'react';



interface SegmentProps extends React.ComponentPropsWithRef<'div'> {

}
interface SegmentButtonProps extends React.ComponentPropsWithRef<'button'> {
    text: string | number;
    value: string | number;
    icon?: React.ReactNode;
    active?: boolean
}