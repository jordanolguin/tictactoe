import ThreeJSStar from "../../components/ThreeJSStar/ThreeJSStar";
import BackButton from "../../components/BackButton/BackButton";
import { useTheme } from "../../contexts/ThemeContext";
import "./Landing.css";

const Landing = () => {
  const { isDark } = useTheme();

  return (
    <div className={`landingContainer ${isDark ? "dark" : "light"}`}>
      <ThreeJSStar />
      <BackButton />
    </div>
  );
};

export default Landing;
