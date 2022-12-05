
import React from 'react';

type Div = React.ComponentPropsWithoutRef<'div'>

interface DeviceTemplateProps extends Div {
    active?: boolean;
    onEdit?: () => void;
    editHiglight?: boolean;
    CodeHeader?: React.ReactNode;
}

interface CustomTemplateProps extends DeviceTemplateProps { }

interface Common {
    padding?: string;
    iconGap?: string;
    background?: string;
    size?: string | number | undefined;
}
interface InputProps {
    icon?: string;
    inputStyle?: string | ("icon" | "input" | "icon+input" | "nothing");
}
interface UnixProps extends InputProps, Common {
    // size?: string | number | undefined;
    theme: ("filled" | "outline") | string;

}

interface LightColors {
    name: string;
    hex: string;
}

interface LightsStyleTypes extends InputProps, Common {
    colors?: LightColors[]
    circleWidth?: string | number | undefined;
    borderRadius?: string | number | undefined;
}
interface IOSTermainalProps {
    editable?: boolean;
    lightsStyle: LightsStyleTypes;
    theme: ("filled" | "outline") | string;
    background?: Common['background']
}
