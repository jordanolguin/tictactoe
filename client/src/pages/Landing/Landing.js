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
  const firstVisit = !localStorage.getItem("hasVisited");
  const [showCountdown, setShowCountdown] = useState(false);

  const initialMessage = firstVisit
    ? "Welcome to Tic Tac Toe!"
    : "New game in:";
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
      <h2 className="message">{typedMessage}</h2>
      {showCountdown && <h1 className="countdown">{countdown}</h1>}
      <BackButton />
    </div>
  );
};

export default Landing;
