import React from 'react';
import preloader from '../../assets/images/spinner-solid-svgrepo-com.svg';

function Preloader() {
  return (
    <div>
      <img src={preloader} alt="preloader" />
    </div>
  );
}

export default Preloader;
