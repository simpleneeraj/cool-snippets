import "styles/globals.scss";
import store from "store";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

function RootApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default RootApp;
