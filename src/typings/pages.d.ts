import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

/**************************
META DATA PROPS
***************************/
interface MetaProps {
    title: string;
    description: string;
    thumbnail?: string;
}
/**************************
LAYOUT PROPS
***************************/
type NextPageWithLayout = NextPage & {
    perpage?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

/**************************
HANDLING ERROR
***************************/
interface ErrorProps {
    statusCode?: number;
    error?: {
        statusCode?: number;
    };
    response?: {
        statusCode?: number;
    };
}