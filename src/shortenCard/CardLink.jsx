import React from 'react';
import styles from './CardLink.module.css'

const CardLink = ({ long, short }) => {
  return (
    <div className={`container ${styles.cardLink}`}>
      <p>{long}</p>
      <div className={styles.shortlink}>
        <p className={styles.short}>{short}</p>
        <button>Copy</button>
      </div>
    </div>
  );
};

export default CardLink;
