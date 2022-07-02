import React from "react";
import ReactDOM from "react-dom";
import "styles/globals.scss";
import App from "app/index";
import store from "store";
import { Provider } from "react-redux";
import reportWebVitals from "worker/webvitals";
import register from "worker";

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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA

// serviceWorkerRegistration.register();

register();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
