import React from "react";

/**************************
Select State Types
***************************/
interface SelectStateTypes {
    isOpenModel: boolean;
    selectedValue: string;
    indexValue: number;
}
/**************************
Select Types and Props
***************************/
interface ListTypes {
    text: any;
    value: any;
}
interface SelectOptionProps {
    children: ListTypes[];
    defaultValue: string | number | any;
    onClick?: (e: React.SyntheticEvent) => void;
    onChange?: (value: string) => void;
    careticon?: JSX.Element;
}