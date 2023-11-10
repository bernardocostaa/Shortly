// ParentComponent.jsx
import React, { useState } from 'react';
import ShortemCard from './ShortemCard';
import CardLink from './CardLink';

const ParentComponent = () => {
  const [urlInput, setUrlInput] = useState("");
  const [data, setData] = useState(null);
  const [cardList, setCardList] = useState([]);

  const handleShorten = (url, shortUrl) => {
    setUrlInput(url);
    setData(shortUrl);

    setCardList(prevList => [
        ...prevList,
        { urlInput, data }
      ]);
  };

  

  return (
    <div>
      <ShortemCard onShorten={handleShorten} />
      {cardList.map((card, index) => (
        <CardLink key={index} urlInput={card.urlInput} data={card.data} />
      ))}
    </div>
  );
};

export default ParentComponent;
