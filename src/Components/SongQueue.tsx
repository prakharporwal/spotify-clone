import { Song, songList1 } from "./Dashboard";

interface SongList {
  songsList: Song[];
}

const SongQueue: React.FunctionComponent<SongList> = (props) => {
  return (
    <div className="absolute lg:left-64 sm:left-40 z-[-100] h-[calc(100vh-6rem)] lg:w-[calc(100vw-16rem)] sm:w-[calc(100vw-10rem)] text-white bg-mygrey-600 pt-4">
      <div>
        <ol className="flex flex-col gap-2 m-8">
          {songList1.map((song) => {
            return <SongListItem song={song} />;
          })}
        </ol>
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
        <span>{song.name}</span>
      </span>
      <span>
        <span>{song.artist}</span>
      </span>
    </li>
  );
};

export default SongQueue;
