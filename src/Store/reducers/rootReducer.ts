import { combineReducers } from "redux";
import { SongModel } from "../models/Song";
import songReducer from "./songReducer";
import { playlistReducer } from "./playlistReducer";
import { ActionTypes } from "../models/ActionTypes";

export interface IAppState {
  currentSong?: SongModel;
  currPlaylist?: SongModel[];
  currPlayState: boolean;
}

interface IPayload {}

export interface IAction {
  type: ActionTypes;
  payload: IPayload;
}

const appState: IAppState = {
  currPlayState: false,
};

export const rootReducer = combineReducers({
  reducer: { songReducer, playlistReducer },
});
