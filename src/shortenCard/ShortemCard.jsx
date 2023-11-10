import React from "react";
import styles from "./ShortemCard.module.css";

const ShortemCard = () => {
  const [urlInput, setUrlInput] = React.useState("");

  function ShortenURL(event){
    event.preventDefault()
    console.log('oii');
  }

  const myHeaders = new Headers();
  myHeaders.append("apikey", "PaMTyPxShgi8MUkllPd11y4sPNlQBQ5S");

  const raw = urlInput;

  const requestOptions = {
    method: "POST",
    redirect: "follow",
    headers: myHeaders,
    body: raw,
  };

  fetch("https://api.apilayer.com/short_url/hash", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
  console.log(urlInput);

  return (
    <section className={`container ${styles.shorten}`}>
      <div className={styles.bgImg}>
        <form className={styles.areaInput}>
          <input
            type="text"
            value={urlInput}
            onChange={(event) => setUrlInput(event.target.value)}
            placeholder="Shorten a link here..."
          />
          <button onClick={ShortenURL}>Shorten It!</button>
        </form>
      </div>
    </section>
  );
};

export default ShortemCard;
