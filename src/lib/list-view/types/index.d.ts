import * as React from "react";

/**************************
UIListView Props 
***************************/
interface ListViewProps extends React.ComponentPropsWithRef<"div"> {
    height?: number;
    offset?: number;
    duration?: number;
    root?: HTMLElement | undefined;
    children: React.ReactNode | React.ReactNode;
}
