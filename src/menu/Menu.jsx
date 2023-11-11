import React from "react";
import styles from "./Menu.module.css";
import { Logo } from "../svgs/Logo";

export const Menu = () => {
  const [mobileMenu, setMobileMenu] = React.useState();

  const menuRef = React.useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMobileMenu(false);
    }
    console.log(menuRef.current);
    console.log(event.target);
    console.log(!menuRef.current.contains(event.target));
  };

 React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);


  return (
    <nav className={`container ${styles.menuCont}`} ref={menuRef}>
      <div className={styles.menuPrin}>
        <a href="#">
          <Logo />
        </a>
        <ul className={styles.ulPrin}>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
        </ul>
      </div>
      <ul className={styles.ulSingLogin}>
        <li>
          <a className={styles.login} href="#">
            Login
          </a>
        </li>
        <li>
          <a className={styles.btnSing} href="#">
            Sign Up
          </a>
        </li>
      </ul>
      <button
        onClick={() => setMobileMenu(!mobileMenu)}
        aria-label="menu"
        className={`${styles.btnMobile} ${mobileMenu ? styles.ativoMobile : ''}`}
      ></button>
      {mobileMenu && (
        <ul className={styles.ulMobile}>
          <li className={styles.menup1}>
            <a href="#">Features</a>
          </li>
          <li className={styles.menup1}>
            <a href="#">Pricing</a>
          </li>
          <li className={styles.menup1}>
            <a href="#">Resources</a>
          </li>
          <div className={styles.lineMenu}></div>
          <li className={styles.menup1}>
          <a className={styles.login} href="#">
            Login
          </a>
        </li>
        <li>
          <a className={styles.btnloginMobile} href="#">
            Sign Up
          </a>
        </li>
        </ul>
      )}
    </nav>
  );
};

export default Menu;
