import React from 'react'
import styles from './ShortemCard.module.css'

const ShortemCard = () => {
  return (
    <section className={`container ${styles.shorten}` }>
      <div className={styles.bgImg}>
        <form className={styles.areaInput}>
          <input type="text" placeholder='Shorten a link here...' />
          <button>Shorten It!</button>
        </form>
      </div>
    </section>
  )
}

export default ShortemCard