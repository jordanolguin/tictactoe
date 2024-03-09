import Logo from "../Logo/Logo";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <p className={styles.p}>&copy; 2024</p>
      <div className={styles.links}>
        <a href="your-repo-url" style={{ marginRight: "10px" }}>
          Repo
        </a>
        <a href="your-venmo-link">Venmo</a>
      </div>
    </footer>
  );
};

export default Footer;
