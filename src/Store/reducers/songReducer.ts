import { ActionTypes } from "../models/ActionTypes";
import { IAction, IAppState } from "./rootReducer";

export default function songReducer(state: IAppState, action: IAction) {
  switch (action.type) {
    case ActionTypes.CHANGE_SONG:
      return {
        ...state,
        currentSong: action.payload,
      };
  }
}
