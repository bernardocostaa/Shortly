import React, { useState } from "react";
import styles from "./CardLink.module.css";

const CardLink = ({ long, short }) => {
  const [copy, setCopy] = useState(false)

  function copyUrl(event){
    event.preventDefault()
    navigator.clipboard.writeText(short)
    setCopy(true)
    setTimeout(()=>{
      setCopy(false)
    },2000)
  }

  return (
    <div className={`container ${styles.resetpd}`}>
      <div className={` ${styles.cardLink}`}>
        <p className={styles.long}>{long}</p>
          <div className={styles.line}></div>
        <div className={styles.shortlink}>
          <p className={styles.short}>{short}</p>
          <button onClick={copyUrl} className={copy ? styles.btnCopied : styles.btnCopy}>{copy ? 'Copied!' : 'Copy'}</button>
        </div>
      </div>
    </div>
  );
};

export default CardLink;
