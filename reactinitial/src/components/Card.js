import React from 'react';

function Card({ data }) {
  return (
    <div className="card">
      <div className="title">{data.title}</div>

      <div className="suv">{data.sub}</div>
      <div className="text">{data.text}</div>
    </div>
  );
}

export default Card;
