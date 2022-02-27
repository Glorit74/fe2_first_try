import React, { useState } from 'react';

function Character({ data, isLoading }) {
  const [isClicked, setIsClicked] = useState(false);

  const onClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className={!isLoading ? 'character_container' : 'none'}>
      <div>Name: {data.name}</div>
      {isClicked && <div>{data.details}</div>}
      {isClicked ? (
        <button onClick={onClick}>Show less</button>
      ) : (
        <button onClick={onClick}>Show more</button>
      )}
    </div>
  );
}

export default Character;
