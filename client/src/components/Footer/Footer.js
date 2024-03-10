import Logo from "../Logo/Logo";
import VenmoRepo from "../VenmoRepo/VenmoRepo";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <p className={styles.p}>&copy; 2024</p>
      <div className={styles.links}>
        <VenmoRepo />
      </div>
    </footer>
  );
};

export default Footer;
