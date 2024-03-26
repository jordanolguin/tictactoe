import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import { useAudio } from "../../contexts/AudioContext";
import { useTheme } from "../../contexts/ThemeContext";

const MusicButton = () => {
  const { isMuted, toggleMute } = useAudio();
  const { isDark } = useTheme();

  const buttonStyle = {
    backgroundColor: isDark ? "#1b1c1e" : "#f0f0f0",
    border: "none",
    borderRadius: "10px",
    padding: "10px",
    cursor: "pointer",
    boxShadow: isMuted
      ? isDark
        ? "inset 5px 5px 10px #0a0b0c, inset -5px -5px 10px #2c2d2f"
        : "inset 5px 5px 10px #d1d1d1, inset -5px -5px 10px #ffffff"
      : isDark
      ? "5px 5px 10px #0a0b0c, -5px -5px 10px #2c2d2f"
      : "5px 5px 10px #d1d1d1, -5px -5px 10px #ffffff",
    transition: "box-shadow 0.3s ease-in-out",
  };

  const iconColor = isDark ? "#f0f0f0" : "#1b1c1e";

  return (
    <button style={buttonStyle} onClick={toggleMute}>
      <FontAwesomeIcon
        icon={isMuted ? faVolumeMute : faVolumeUp}
        color={iconColor}
        size="2x"
      />
    </button>
  );
};

export default MusicButton;
