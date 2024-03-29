import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ThreeJSStar from "../../components/ThreeJSStar/ThreeJSStar";
import BackButton from "../../components/BackButton/BackButton";
import { useTheme } from "../../contexts/ThemeContext";
import useTypingEffect from "../../hooks/useTypingEffect";
import "./Landing.css";

const Landing = () => {
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const [countdown, setCountdown] = useState(10);
  const [showCountdown, setShowCountdown] = useState(false);

  const initialMessage = "New game in:";
  const typedMessage = useTypingEffect(initialMessage, 150, () => {
    setShowCountdown(true);
  });

  useEffect(() => {
    let timerId;
    if (showCountdown && countdown > 0) {
      timerId = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (countdown === 0) {
      navigate("/play");
    }
    return () => clearTimeout(timerId);
  }, [countdown, showCountdown, navigate]);

  return (
    <div className={`landingContainer ${isDark ? "dark" : "light"}`}>
      <ThreeJSStar />
      <h1 className={`message ${isDark ? "dark" : "light"}`}>{typedMessage}</h1>
      {showCountdown && (
        <h2 className={`countdown ${isDark ? "dark" : "light"}`}>
          {countdown}
        </h2>
      )}
      <BackButton />
    </div>
  );
};

export default Landing;
