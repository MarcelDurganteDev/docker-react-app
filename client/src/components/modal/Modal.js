import React from 'react';
import GoogleMap from '../googleMap/GoogleMap';
import './Modal.scss';

const Modal = ( props ) => {

  console.log( 'props', props );
 
  return (
    <div className='modal'>
      <div className='modal__container'>
        <div className='modal__container__close-btn'>
          <button onClick={() => props.closeModal(false)}>X</button>
        </div>
        <div className='modal__container__title'>
          <h1>{ props.title }</h1>
        </div>
        <div className='modal__body'>
          <GoogleMap lat={props.lat} long={props.long} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
