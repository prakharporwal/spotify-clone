import { rootReducer } from "./reducers/rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";

const store = configureStore(
  process.env.NODE_ENV !== "production"
    ? { reducer: rootReducer }
    : {
        reducer: rootReducer,
        middleware: composeWithDevTools({}),
      }
);

export default store;
