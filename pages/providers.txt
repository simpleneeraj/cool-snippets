"use client";

import React from "react";
import store from "store";
import { Provider } from "react-redux";
import { HeaderProvider } from "store/context/header";

const Providers = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <Provider store={store}>
      <HeaderProvider>{children}</HeaderProvider>
    </Provider>
  );
};
export default Providers;
