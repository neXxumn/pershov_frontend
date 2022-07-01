import React from 'react';
import preloader from '../../assets/images/spinner-solid-svgrepo-com.svg'

const Preloader = (props) => {
  return (
    <div>
      <img src={preloader} />
    </div>
  )
}

export default Preloader;