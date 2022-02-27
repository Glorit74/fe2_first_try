import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Card({ data }) {
  return (
    <div className="card">
      <div className="title">{data.title}</div>

      <div className="suv">{data.sub}</div>
      <div className="text">{data.text}</div>
      <button>
        <div>details</div>
        <div className="icon>">
          <ArrowForwardIcon />
        </div>
      </button>
    </div>
  );
}

export default Card;
