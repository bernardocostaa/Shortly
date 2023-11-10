import React, { useState } from 'react';
import ShortemCard from './ShortemCard';
import CardLink from './CardLink';

const ParentComponent = () => {
  const [cardList, setCardList] = useState([]);

  const handleShorten = (urls) => {

    setCardList(prevList => [
      ...prevList,
      { ...urls } 
    ]);
  };

 

  return (
    <>
      <ShortemCard onShorten={handleShorten} />
      {cardList.map((card, index) => (
        <CardLink key={index} long={card.long_url} short={card.short_url} />
      ))}
    </>
  );
};

export default ParentComponent;
