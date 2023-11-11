import React from 'react'
import styles from './Header.module.css'


const Header = () => {
  return (
    <section className={styles.hidden}>
        <div className={`container ${styles.headerCont}`}>
            <div className={styles.headerInfo}>
                <h1>More than just <br /> shorter links</h1>
                <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                <a href="#">Get Started</a>
            </div>
            <div className={styles.headerImg}>
                <img src="../../../src/img/illustration-working.svg" alt="trabalho imagem" />
            </div>
        </div>
    </section>
  )
}

export default Header