import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import MusicButton from "../MusicButton/MusicButton";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
      }}
    >
      <ThemeSwitcher />
      <MusicButton />
    </header>
  );
};

export default Header;
