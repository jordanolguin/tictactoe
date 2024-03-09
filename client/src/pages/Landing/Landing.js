import ThreeJSStar from "../../components/ThreeJSStar/ThreeJSStar";
import BackButton from "../../components/BackButton/BackButton";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landingContainer">
      <ThreeJSStar />
      <BackButton />
    </div>
  );
};

export default Landing;
