import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";

const VenmoRepo = () => {
  const { isDark } = useTheme();

  const [isPressed, setIsPressed] = useState({
    github: false,
    dollar: false,
  });

  const [showTooltip, setShowTooltip] = useState({
    github: false,
    dollar: false,
  });

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowTooltip((prevState) => ({ ...prevState, github: true }));
    }, 10000);

    const timer2 = setTimeout(() => {
      setShowTooltip((prevState) => ({ github: false, dollar: true }));
    }, 15000);

    const timer3 = setTimeout(() => {
      setShowTooltip((prevState) => ({ github: false, dollar: false }));
    }, 20000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const containerStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "200px",
    height: "150px",
    backgroundColor: isDark ? "#1b1c1e" : "#f0f0f0",
    transition: "background 0.5s",
    position: "relative",
  };

  const iconStyle = {
    fontSize: "30px",
    color: isDark ? "#000" : "#1b1c1e",
    cursor: "pointer",
  };

  const getButtonStyle = (pressed) => ({
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    padding: "20px",
    backgroundColor: isDark ? "#1b1c1e" : "#f0f0f0",
    boxShadow: pressed
      ? isDark
        ? `inset 8px 8px 15px #0a0b0c, inset -8px -8px 15px #2c2d2f`
        : `inset 8px 8px 15px #d1d1d1, inset -8px -8px 15px #ffffff`
      : isDark
      ? `8px 8px 15px #0a0b0c, -8px -8px 15px #2c2d2f`
      : `8px 8px 15px #d1d1d1, -8px -8px 15px #ffffff`,
    cursor: "pointer",
    transition: "box-shadow 0.2s ease-in-out",
  });

  const tooltipStyle = {
    position: "absolute",
    top: "-2px",
    fontSize: "12px",
    background: isDark ? "#f0f0f0" : "#1b1c1e",
    borderRadius: "6px",
    padding: "5px",
    color: isDark ? "#1b1c1e" : "#f0f0f0",
    boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const triangleStyle = {
    width: "0",
    height: "0",
    borderLeft: "5px solid transparent",
    borderRight: "5px solid transparent",
    borderTop: `5px solid ${isDark ? "#f0f0f0" : "#1b1c1e"}`,
    position: "absolute",
    top: "100%",
  };

  const handleButtonClick = (button) => {
    setIsPressed((prevState) => ({
      ...prevState,
      [button]: !prevState[button],
    }));
  };

  const handleMouseEnter = (button) => {
    setShowTooltip((prevState) => ({
      ...prevState,
      [button]: true,
    }));
  };

  const handleMouseLeave = (button) => {
    setShowTooltip((prevState) => ({
      ...prevState,
      [button]: false,
    }));
  };

  return (
    <div style={containerStyle}>
      <div
        style={getButtonStyle(isPressed.github)}
        onMouseDown={() => handleButtonClick("github")}
        onMouseUp={() => handleButtonClick("github")}
        onMouseEnter={() => handleMouseEnter("github")}
        onMouseLeave={() => handleMouseLeave("github")}
        onClick={() =>
          window.open("https://github.com/jordanolguin/tictactoe", "_blank")
        }
      >
        <FontAwesomeIcon icon={faGithub} style={iconStyle} />
        {showTooltip.github && (
          <motion.div
            style={{ ...tooltipStyle, left: "10px" }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            Check out this repo!
            <div style={triangleStyle}></div>
          </motion.div>
        )}
      </div>
      <div
        style={getButtonStyle(isPressed.dollar)}
        onMouseDown={() => handleButtonClick("dollar")}
        onMouseUp={() => handleButtonClick("dollar")}
        onMouseEnter={() => handleMouseEnter("dollar")}
        onMouseLeave={() => handleMouseLeave("dollar")}
        onClick={() => window.open("https://venmo.com/jordanolguin", "_blank")}
      >
        <FontAwesomeIcon icon={faMoneyBill} style={iconStyle} />
        {showTooltip.dollar && (
          <motion.div
            style={{ ...tooltipStyle, right: "10px" }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            Buy me a beer!
            <div style={triangleStyle}></div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default VenmoRepo;
