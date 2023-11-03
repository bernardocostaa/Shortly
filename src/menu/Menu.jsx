import React from 'react'
import styles from './Menu.module.css'
import { Logo } from '../svgs/Logo'

export const Menu = () => {
  return (
    <nav className={`container ${styles.menuCont}`}>
        <div className={styles.menuPrin}>
          <a href="#"><Logo /></a>
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
            <a className={styles.login} href="#">Login</a>
          </li>
          <li>
            <a className={styles.btnSing} href="#">Sign Up</a>
          </li>
        </ul>
        <button className={styles.btnMobile}></button>
    </nav>
  )
}


export default Menu
