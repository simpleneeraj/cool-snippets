import React from "react";

interface RgbColor {
    r: number;
    g: number;
    b: number;
}

interface RgbaColor extends RgbColor {
    a: number;
}

interface HslColor {
    h: number;
    s: number;
    l: number;
}

interface HslaColor extends HslColor {
    a: number;
}

interface HsvColor {
    h: number;
    s: number;
    v: number;
}

interface HsvaColor extends HsvColor {
    a: number;
}

type ObjectColor = RgbColor | HslColor | HsvColor | RgbaColor | HslaColor | HsvaColor;

type AnyColor = string | ObjectColor;

interface ColorModel<T extends AnyColor> {
    defaultColor: T;
    toHsva: (defaultColor: T) => HsvaColor;
    fromHsva: (hsva: HsvaColor) => T;
    equal: (first: T, second: T) => boolean;
}

type ColorPickerHTMLAttributes = Omit<
    React.HTMLAttributes<HTMLDivElement>,
    "color" | "onChange" | "onChangeCapture"
>;

interface ColorPickerBaseProps<T extends AnyColor> extends ColorPickerHTMLAttributes {
    color: T;
    onChange: (newColor: T) => void;
}

type ColorInputHTMLAttributes = Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "onChange" | "value"
>;

interface ColorInputBaseProps extends ColorInputHTMLAttributes {
    color?: string;
    onChange?: (newColor: string) => void;
}
