import { rootReducer } from "./reducers/rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";

const store = configureStore({
  reducer: rootReducer,
  middleware:
    process.env.NODE_ENV !== "production" ? composeWithDevTools({}) : undefined,
});

export default store;
