import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faCcApplePay } from "@fortawesome/free-brands-svg-icons";

const VenmoRepo = () => {
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

  const buttonStyle = {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    padding: "20px",
    backgroundColor: "#1b1c1e",
    boxShadow: `8px 8px 15px #0a0b0c,
                -8px -8px 15px #2c2d2f`,
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <div
        style={buttonStyle}
        onClick={() =>
          window.open("https://github.com/jordanolguin/tictactoe", "_blank")
        }
      >
        <FontAwesomeIcon icon={faGithub} style={iconStyle} />
      </div>
      <div
        style={buttonStyle}
        onClick={() => window.open("https://venmo.com/jordanolguin", "_blank")}
      >
        <FontAwesomeIcon icon={faCcApplePay} style={iconStyle} />
      </div>
    </div>
  );
};

export default VenmoRepo;
