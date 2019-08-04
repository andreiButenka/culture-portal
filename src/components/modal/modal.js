import React from "react";
import Modal from 'react-modal';
import './modal.css';

const ModalComponent = ({ isOpen, onRequestClose, children }) => {
  Modal.setAppElement('#___gatsby');

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className='modal'
      overlayClassName="overlay"
    >
      {children}
    </Modal>
  )
};

export default ModalComponent;