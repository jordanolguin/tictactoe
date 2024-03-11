import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";

const VenmoRepo = () => {
  const [isPressed, setIsPressed] = useState({
    github: false,
    dollar: false,
  });

  const containerStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "200px",
    height: "150px",
    backgroundColor: "#1b1c1e",
  };

  const iconStyle = {
    fontSize: "30px",
    cursor: "pointer",
  };

  const getButtonStyle = (pressed) => ({
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    padding: "20px",
    backgroundColor: "#1b1c1e",
    boxShadow: pressed
      ? `inset 8px 8px 15px #0a0b0c, inset -8px -8px 15px #2c2d2f`
      : `8px 8px 15px #0a0b0c, -8px -8px 15px #2c2d2f`,
    cursor: "pointer",
    transition: "box-shadow 0.2s ease-in-out",
  });

  const handleButtonClick = (button) => {
    setIsPressed((prevState) => ({
      ...prevState,
      [button]: !prevState[button],
    }));
  };

  return (
    <div style={containerStyle}>
      <div
        style={getButtonStyle(isPressed.github)}
        onMouseDown={() => handleButtonClick("github")}
        onMouseUp={() => handleButtonClick("github")}
        onMouseLeave={() => isPressed.github && handleButtonClick("github")}
        onClick={() =>
          window.open("https://github.com/jordanolguin/tictactoe", "_blank")
        }
      >
        <FontAwesomeIcon icon={faGithub} style={iconStyle} />
      </div>
      <div
        style={getButtonStyle(isPressed.dollar)}
        onMouseDown={() => handleButtonClick("dollar")}
        onMouseUp={() => handleButtonClick("dollar")}
        onMouseLeave={() => isPressed.dollar && handleButtonClick("dollar")}
        onClick={() => window.open("https://venmo.com/jordanolguin", "_blank")}
      >
        <FontAwesomeIcon icon={faMoneyBill} style={iconStyle} />
      </div>
    </div>
  );
};

export default VenmoRepo;
