import React from 'react';
import GoogleMap from '../googleMap/GoogleMap';

const Modal = () => {



  return (
    <div className='modal-bg'>
      <div className='modal-container'>
        <div className='modal-header'>
          <h1>city name</h1>
          <button className='btn-close'>X</button>
        </div>
        <div className='modal-body'>
          <div className='modal-image'>
            <GoogleMap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
