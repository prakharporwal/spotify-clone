import { action, Action, createStore, debug } from "easy-peasy";
import { Song } from "../Components/Dashboard";

interface StoreModel {
  song: Song;
  changeSong: Action<any, any>;
}

const playerStore = createStore({
  song: {
    audio_src: "songs/manike-mage-hithe.mp3",
    name: "Aziyat",
    image_url: "",
    artist: "Prathband",
  },
  changeSong: action((state: any, payload: any) => {
    console.log(debug(state));
    state.song = payload;
  }),
});

export { playerStore, type StoreModel };
