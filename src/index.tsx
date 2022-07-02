import React from "react";
import ReactDOM from "react-dom";
import "styles/globals.scss";
import App from "app/index";
import store from "store";
import { Provider } from "react-redux";
import registerServiceWorker from "registerServiceWorker";

const RootApp = () => {
  return (
    <React.StrictMode>
      <React.Suspense fallback={null}>
        <Provider store={store}>
          <App />
        </Provider>
      </React.Suspense>
    </React.StrictMode>
  );
};

// App Root
const root = document.getElementById("__app") as HTMLElement;
ReactDOM.render(<RootApp />, root);
registerServiceWorker();
