import React from 'react';

function LoadingMask({ isLoading }) {
  return (
    <div className="loading_container">
      <div className={isLoading ? 'loading' : 'none'}>Loading...</div>
    </div>
  );
}

export default LoadingMask;
