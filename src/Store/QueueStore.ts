import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Song } from "../Components/Dashboard";

type actionType = {
  type: string;
  payload: Song;
};

type QueueState = {
  current_song: Song;
  queue: Song[];
};

let initSong: Song = {
  id: "23rdf23e",
  name: "KillerCode",
  image_url: "images/song-art.jpg",
  artist: "Michael Jackson",
  audio_src: "songs/Cartoon.mp3",
};

const initialState: QueueState = {
  current_song: initSong,
  queue: [],
};

const queueStore = configureStore({
  reducer: combineReducers({ queueReducer, currentSongReducer }),
});

function queueReducer(state: QueueState, action: actionType) {
  // Check to see if the reducer cares about this action
  switch (action.type) {
    case "ADD_TO_QUEUE":
      // If so, make a copy of `state`
      return [...state.queue, action.payload];

    case "REMOVE_FROM_QUEUE":
      let newQ = state.queue;
      newQ = newQ.filter((item) => item.id !== action.payload.id);
      return { ...state, newQ };
    // otherwise return the existing state unchanged
  }

  return state;
}

function currentSongReducer(
  state: QueueState = initialState,
  action: actionType
) {
  switch (action.type) {
    case "CHANGED":
      if (action.payload.id !== state.current_song.id) {
        let newQ = state.queue;
        newQ.unshift(action.payload);
        return { ...state, current_song: action.payload, queue: newQ };
      }
  }
}

export type RootState = ReturnType<typeof queueStore.getState>;
