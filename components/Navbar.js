import styles from "../styles/Layout.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <img
        src="./logo.png"
        alt="logo"
        className={styles.navbar_logo}
        onClick={() => router.push("/")}
      />

      <ul className={styles.navbar_menu}>
        <Link href="/" as={"/"}>
          <li>صفحه نخست</li>
        </Link>
        <Link href="/about" as={"/about"}>
          <li>درباره ما</li>
        </Link>
        <li>پروژه ها</li>
        <li>رویداد ها</li>
      </ul>
    </nav>
  );
};

export default Navbar;
