import { createContext, useContext, useState, useEffect, useRef } from "react";
import backgroundMusic from "../assets/audio/tictactoe-game-song.mp3";

const AudioContext = createContext();

export const useAudio = () => useContext(AudioContext);

export const AudioProvider = ({ children }) => {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(backgroundMusic);
    audioRef.current.loop = true;

    const playAudio = async () => {
      try {
        await audioRef.current.play();
      } catch (error) {
        console.error("Audio play failed:", error);
      }
    };

    if (!isMuted) {
      playAudio();
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [isMuted]);

  const toggleMute = () => {
    if (audioRef.current) {
      const wasMuted = isMuted;
      setIsMuted(!wasMuted);
      if (wasMuted) {
        audioRef.current.play().catch((e) => console.error(e));
      } else {
        audioRef.current.pause();
      }
    }
  };

  useEffect(() => {
    const startMusicOnUserInteraction = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play().catch((e) => console.error(e));
      }
      document.removeEventListener("click", startMusicOnUserInteraction);
    };

    document.addEventListener("click", startMusicOnUserInteraction);

    return () => {
      document.removeEventListener("click", startMusicOnUserInteraction);
    };
  }, []);

  return (
    <AudioContext.Provider value={{ isMuted, toggleMute }}>
      {children}
    </AudioContext.Provider>
  );
};
