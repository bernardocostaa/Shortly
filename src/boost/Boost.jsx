import React from 'react'
import styles from './Boost.module.css'

const Boost = () => {
  return (
    <section className={styles.bgBoost}>
      <div className={styles.imgFundo}>
        <div className={styles.boostCont}>
            <h1>Boost your links today</h1>
            <a href="#">Get Started</a>
        </div>
      </div>
    </section>
  )
}

export default Boost