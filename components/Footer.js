import styles from "../styles/Layout.module.css";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

  return (
    <div className={styles.footer}>
      <img src="../logo.png" alt="logo" onClick={() => router.push("/")} />
    </div>
  );
};

export default Footer;
