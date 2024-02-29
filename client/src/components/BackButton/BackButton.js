import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./BackButton.css";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <motion.button
      className="box"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      onClick={() => navigate("/")}
    >
      Back to Home
    </motion.button>
  );
};

export default BackButton;
