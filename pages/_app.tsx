import "styles/globals.scss";
import store from "store";
import { Provider } from "react-redux";
import { AppPropsWithLayout } from "typings/pages";

function RootApp(props: AppPropsWithLayout) {
  const { Component, pageProps } = props;
  const perpage = Component.perpage ?? ((page) => page);
  return (
    <Provider store={store}>{perpage(<Component {...pageProps} />)}</Provider>
  );
}

export default RootApp;
