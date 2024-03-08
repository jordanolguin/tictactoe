import ThreeJSStar from "../../components/ThreeJSStar/ThreeJSStar";
import BackButton from "../../components/BackButton/BackButton";
import Footer from "../../components/Footer/Footer";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landingContainer">
      <ThreeJSStar />
      <BackButton />
      <Footer />
    </div>
  );
};

export default Landing;
