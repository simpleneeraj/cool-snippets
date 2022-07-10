import "styles/globals.scss";
import store from "store";
import { Provider } from "react-redux";
import { AppPropsWithLayout } from "typings/pages";

function RootApp(props: AppPropsWithLayout) {
  // APP PROPS
  const { Component, pageProps } = props;
  // PERPAGE LAYOUT
  const perpage = Component.perpage ?? ((page) => page);
  // RETURN ROOT APP

  return perpage(
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default RootApp;
