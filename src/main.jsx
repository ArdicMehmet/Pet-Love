import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "virtual:svg-icons-register";
import { persistor, store } from "./store/index.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
