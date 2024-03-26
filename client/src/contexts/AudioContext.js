import { createContext, useContext, useState, useEffect } from "react";
import backgroundMusic from "../assets/audio/tictactoe-game-song.mp3";

const AudioContext = createContext();

export const useAudio = () => useContext(AudioContext);

export const AudioProvider = ({ children }) => {
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = new Audio(backgroundMusic);
    if (!isMuted) {
      audio.loop = true;
      audio.play().catch((e) => console.error(e));
    } else {
      audio.pause();
    }
    return () => audio.pause();
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <AudioContext.Provider value={{ isMuted, toggleMute }}>
      {children}
    </AudioContext.Provider>
  );
};
