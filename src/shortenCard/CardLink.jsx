// CardLink.jsx
import React from 'react';

const CardLink = ({ urlInput, data }) => {
  console.log(urlInput,data);
  return (
    <div>
      <p>{urlInput}</p>
      <div>
        <p>{data}</p>
        <button>Copy</button>
      </div>
    </div>
  );
};

export default CardLink;
