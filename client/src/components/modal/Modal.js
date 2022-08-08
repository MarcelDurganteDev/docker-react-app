import React from 'react';
import GoogleMap from '../googleMap/GoogleMap';
import './Modal.scss';

const Modal = ({ closeModal }) => {
  return (
    <div className='modal'>
      <div className='modal__container'>
        <div className='modal__container__close-btn'>
          <button onClick={() => closeModal(false)}>X</button>
        </div>
        <div className='modal__container__title'>
          <h1>city name</h1>
        </div>
        <div className='modal__body'>
          <GoogleMap />
        </div>
      </div>
    </div>
  );
};

export default Modal;
