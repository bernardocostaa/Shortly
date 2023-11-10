import React from "react";
import styles from "./ShortemCard.module.css";
import Fetch from "../Fetch";


const ShortemCard = ({onShorten}) => {
  const [urlInput, setUrlInput] = React.useState("");
  const {data,error,linkValido,loading,request} = Fetch()

  function ShortenURL(event){
    event.preventDefault()
    ApiURL()
  }

  async function ApiURL(){
    const myHeaders = new Headers();
    myHeaders.append("apikey", "PaMTyPxShgi8MUkllPd11y4sPNlQBQ5S");
    const raw = urlInput;

    const requestOptions = {
      method: "POST",
      redirect: "follow",
      headers: myHeaders,
      body: raw,
    };
    request("https://api.apilayer.com/short_url/hash", requestOptions)
    console.log(urlInput);
    console.log(data && data);
   await onShorten(urlInput,data)
  }

  return (
    <section className={`container ${styles.shorten}`}>
      <div className={styles.bgImg}>
        <form className={styles.areaInput}>
          <input
            type="text"
            value={urlInput}
            name="url"
            onChange={(event) => setUrlInput(event.target.value)}
            placeholder="Shorten a link here..."
          />
          {linkValido && <p className={styles.error}>Please add a link</p>}
          {loading ? (
          <button disabled>Loading...</button>
          ): (
          <button onClick={ShortenURL}>Shorten It!</button>
          )}
        </form>
      </div>
    </section>
  );
};

export default ShortemCard;
