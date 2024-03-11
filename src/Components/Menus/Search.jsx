import musicData from "../../data/musicData";
import { useEffect, useState } from "react";

export default function Search(props) {
  const handleTrackClick = (index, playList) => {
    console.log(index);
    console.log(playList);
    props.setCurrentTrackIndex(index, playList); // Call the function passed from the parent component
  };

  const [isPlaylist, setIsPlaylist] = useState(true);
  const [playListSongs, setPlayListSongs] = useState(props.playListSongs);
  const [currentPlaylist, setCurrentPlaylist] = useState(props.playList);

  const toggleIsPlayList = () => {
    setIsPlaylist((prevState) => !prevState);
  };

  const handlePlayListClick = (playList) => {
    setPlayListSongs(playList.songs); // Update the playlist songs
    setCurrentPlaylist(playList);
    console.log(currentPlaylist);
    toggleIsPlayList();
  };

  return (
    <div className="searchMenu">
      {!isPlaylist && (
        <div>
          <h1 className="searchHeader">Playlists</h1>
          <div className="playListView">
            <div className="playlistListing">
              {musicData.chillMix.playListTitle}
              <button onClick={() => handlePlayListClick(musicData.chillMix)}>
                Select
              </button>
            </div>
            <div className="playlistListing">
              {musicData.gamingMix.playListTitle}
              <button onClick={() => handlePlayListClick(musicData.gamingMix)}>
                Select
              </button>
            </div>
            <div className="playlistListing">
              {musicData.jazzMix.playListTitle}
              <button onClick={() => handlePlayListClick(musicData.jazzMix)}>
                Select
              </button>
            </div>
          </div>
        </div>
      )}
      {isPlaylist && (
        <div>
          <div className="playListHeader">
            <h1 className="playListName">{props.playList.playListTitle}</h1>
            <button className="viewPlayListButton" onClick={toggleIsPlayList}>
              View Playlists
            </button>
          </div>

          <div
            className="songList"
            style={{ maxHeight: "90%", overflowY: "auto" }}
          >
            {playListSongs.map((music, index) => (
              <div className="songListing" key={music.title}>
                <img
                  className="searchAlbumArt"
                  src={music.art}
                  alt={music.title}
                ></img>
                <div className="searchArtistDesc">
                  <p className="searchTitle">{music.title}</p>
                  <p className="searchSubtitle">{music.artist}</p>
                </div>
                <button
                  onClick={() => handleTrackClick(index, currentPlaylist)}
                >
                  Play
                </button>{" "}
                {/* Add a button to handle click */}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
