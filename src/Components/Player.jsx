import { useEffect, useState } from "react";
//import useSound from "use-sound"; // for handling the sound
import { Howl } from "howler";

import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // icons for play and pause
import { BiSkipNext, BiSkipPrevious, BiShuffle } from "react-icons/bi"; // icons for next and previous track
import { FiVolume2 } from "react-icons/fi";
import { IconContext } from "react-icons"; // for customizing the icons
import musicData from "../data/musicData.js";

export default function Player(props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [howl, setHowl] = useState(null);

  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    if (howl) {
      howl.unload();
    }

    // Initialize Howler instance for the current track
    const sound = new Howl({
      src: [musicData[currentTrackIndex].audio],
      autoplay: true,
      volume: volume,
      onload: () => {
        setDuration(sound.duration());
      },
      onend: nextTrack,
      onplay: () => {
        setIsPlaying(true);
        requestAnimationFrame(step);
        // console.log(isPlaying);
        // console.log("on play");
        // requestAnimationFrame(step);
      },
    });

    setHowl(sound);

    return () => {
      // Cleanup the Howler instance
      if (howl) {
        howl.unload();
      }
    };
  }, [currentTrackIndex]);

  useEffect(() => {
    let animationFrameId;

    function step() {
      if (isPlaying) {
        setCurrentTime(howl.seek());
        animationFrameId = requestAnimationFrame(step);
      }
    }

    if (isPlaying) {
      animationFrameId = requestAnimationFrame(step);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPlaying, howl]);

  const playPause = () => {
    if (!howl) return;
    console.log(isPlaying);

    if (isPlaying) {
      setIsPlaying(false);
      howl.pause();
    } else {
      setIsPlaying(true);
      howl.play();
    }
  };

  const switchTrack = (index) => {
    if (index >= 0 && index < musicData.length) {
      setCurrentTrackIndex(index);
      // setIsPlaying(false); // Stop playback when switching tracks
      if (howl) {
        howl.unload(); // Unload the current Howl instance
      }
    }
  };

  const shuffleButton = () => {
    const randomIndex = Math.floor(Math.random() * musicData.length);
    switchTrack(randomIndex);
  };

  const prevTrack = () => {
    const newIndex =
      currentTrackIndex - 1 < 0 ? musicData.length - 1 : currentTrackIndex - 1;
    switchTrack(newIndex);
  };
  const nextTrack = () => {
    const newIndex = (currentTrackIndex + 1) % musicData.length;
    switchTrack(newIndex);
  };

  function formatTime(secs) {
    const minutes = Math.floor(secs / 60);
    var seconds = secs - minutes * 60 || 0;

    return `${minutes}:${seconds.toFixed(0) < 10 ? "0" : ""}${seconds.toFixed(
      0
    )}`;
  }

  const toggleVolumeSlider = () => {
    setShowVolumeSlider((prevState) => !prevState);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (howl) {
      howl.volume(newVolume);
    }
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%", // Adjusted to 100%
    width: "35vw", // Adjusted to 50%
    margin: "0 auto", // Center horizontally
  };

  const imageHeaderStyle = {
    maxWidth: "30px",
    maxHeight: "30px",
  };

  const seperatorStyle = {
    opacity: "20%",
  };

  return (
    <div className="component" style={containerStyle}>
      {/* <h2>Playing Now</h2> */}
      {!props.isFullscreen && (
        <div className="header">
          <button className="header--menu--button">
            <img
              className="menu--button--icon"
              src="/Menu.png"
              style={imageHeaderStyle}
            ></img>
          </button>
          <h1 className="header--title">Lofi Haven</h1>
          <h1 style={seperatorStyle}>|</h1>
          <p className="header--subtitle">Now Playing</p>
        </div>
      )}
      <div className="overlay-container">
        {!props.isFullscreen && (
          <img className="musicCover" src={musicData[currentTrackIndex].art} />
        )}
        {!props.isFullscreen && (
          <div className="timeline--container">
            <div className="time">
              <p>{formatTime(currentTime)}</p>
              <p>{formatTime(duration)}</p>
            </div>
            <input
              type="range"
              min="0"
              max={duration}
              defaultValue="0"
              value={currentTime}
              className="timeline"
              onChange={(e) => {
                if (howl) {
                  howl.seek(e.target.value);
                }
              }}
            />
          </div>
        )}

        {!props.isFullscreen && (
          <div>
            <h3 className="title">{musicData[currentTrackIndex].title}</h3>
            <p className="subTitle">{musicData[currentTrackIndex].artist}</p>
          </div>
        )}
      </div>
      {!props.isFullscreen && (
        <div className="controls">
          <button className="volumeButton" onClick={toggleVolumeSlider}>
            <IconContext.Provider value={{ size: "2.0em", color: "#ffffff" }}>
              <FiVolume2 />
            </IconContext.Provider>
          </button>
          {showVolumeSlider && (
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
            />
          )}
          <button className="prevButton" onClick={prevTrack}>
            <IconContext.Provider value={{ size: "2.5em", color: "#ffffff" }}>
              <BiSkipPrevious />
            </IconContext.Provider>
          </button>
          {!isPlaying ? (
            <button className="playButton" onClick={playPause}>
              <IconContext.Provider value={{ size: "3.5em", color: "#ffffff" }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </button>
          ) : (
            <button className="playButton" onClick={playPause}>
              <IconContext.Provider value={{ size: "3.5em", color: "#ffffff" }}>
                <AiFillPauseCircle />
              </IconContext.Provider>
            </button>
          )}
          <button className="nextButton" onClick={nextTrack}>
            <IconContext.Provider value={{ size: "2.5em", color: "#ffffff" }}>
              <BiSkipNext />
            </IconContext.Provider>
          </button>
          <button className="shuffleButton" onClick={shuffleButton}>
            <IconContext.Provider value={{ size: "2.0em", color: "#ffffff" }}>
              <BiShuffle />
            </IconContext.Provider>
          </button>
        </div>
      )}
      {props.isFullscreen && (
        <div className="fs--controls">
          <img
            className="fs--musicCover"
            src={musicData[currentTrackIndex].art}
          />
          <div className="fs--details">
            <h3 className="fs--title">{musicData[currentTrackIndex].title}</h3>
            <p className="fs--subTitle">
              {musicData[currentTrackIndex].artist}
            </p>
          </div>
          <button className="volumeButton" onClick={toggleVolumeSlider}>
            <IconContext.Provider value={{ size: "2.0em", color: "#ffffff" }}>
              <FiVolume2 />
            </IconContext.Provider>
          </button>
          {showVolumeSlider && (
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
            />
          )}
          <button className="prevButton" onClick={prevTrack}>
            <IconContext.Provider value={{ size: "2.5em", color: "#ffffff" }}>
              <BiSkipPrevious />
            </IconContext.Provider>
          </button>
          {!isPlaying ? (
            <button className="playButton" onClick={playPause}>
              <IconContext.Provider value={{ size: "3.5em", color: "#ffffff" }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </button>
          ) : (
            <button className="playButton" onClick={playPause}>
              <IconContext.Provider value={{ size: "3.5em", color: "#ffffff" }}>
                <AiFillPauseCircle />
              </IconContext.Provider>
            </button>
          )}
          <button className="nextButton" onClick={nextTrack}>
            <IconContext.Provider value={{ size: "2.5em", color: "#ffffff" }}>
              <BiSkipNext />
            </IconContext.Provider>
          </button>
          <button className="shuffleButton" onClick={shuffleButton}>
            <IconContext.Provider value={{ size: "2.0em", color: "#ffffff" }}>
              <BiShuffle />
            </IconContext.Provider>
          </button>
        </div>
      )}
    </div>
  );
}
