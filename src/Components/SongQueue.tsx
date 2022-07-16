import { Song, songList1 } from "./Dashboard";

interface SongList {
  songsList: Song[];
}

const SongQueue: React.FunctionComponent<SongList> = (props) => {
  return (
    <div className="relative lg:left-64 sm:left-40 z-[-100] h-[100vh-6rem] lg:w-[calc(100vw-17rem)] sm:w-[calc(100vw-10rem)] text-white bg-gradient-to-b from-pink-700 to-black pt-4">
      <div className="overflow-y-auto">
        <div className="flex m-8">
          <span>
            <img className="h-52 w-52" src={"images/sing-play.jpg"} alt={""} />
          </span>
          <div className="flex flex-col border px-8">
            <span>Artist</span>
            <span className="text-6xl font-semibold">Daily Mix</span>
          </div>
        </div>
        <div className="bg-mygrey-600/[0.6]">
          <ol className="flex flex-col gap-2 p-8">
            {songList1.map((song) => {
              return <SongListItem song={song} />;
            })}
            {songList1.map((song) => {
              return <SongListItem song={song} />;
            })}
            {songList1.map((song) => {
              return <SongListItem song={song} />;
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

interface SongProps {
  song: Song;
}

const SongListItem: React.FunctionComponent<SongProps> = ({ song }) => {
  return (
    <li className="flex gap-4 items-center rounded hover:bg-mygrey-800 p-2">
      <span>
        <img className="h-12 w-12" src={song.image_url} alt={song.name} />
      </span>
      <span>
        <span className="block">{song.name}</span>
        <span className="block text-xs text-mygrey-200">{song.artist}</span>
      </span>
      <span></span>
    </li>
  );
};

export default SongQueue;
