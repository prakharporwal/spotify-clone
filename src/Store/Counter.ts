import { Action, configureStore } from "@reduxjs/toolkit";

const initialState = { value: 0 };

let counterStore = configureStore({ reducer: counterReducer });

function counterReducer(state = initialState, action: Action) {
  // Check to see if the reducer cares about this action
  if (action.type === "counter/increment") {
    // If so, make a copy of `state`
    return {
      // and update the copy with the new value
      value: state.value + 1,
    };
  }
  // otherwise return the existing state unchanged
  return state;
}

export default counterStore;
