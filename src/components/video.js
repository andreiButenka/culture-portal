import PropTypes from "prop-types";
import React, { useState } from "react";
import YouTube from 'react-youtube';
import ModalComponent from './modal';
import Button from './button';
import './video.css';

const Video = ({ videoId }) => {
  const [modalWindowIsOpen, toggleModalWindow] = useState(false);

  const toggleModal = () => {
    toggleModalWindow(!modalWindowIsOpen);
  };

  const videoContainer = (
    <div className='video-container'>
      <h2>Video</h2>
      <Button clickHandler={toggleModal}>Watch the video</Button>
      <ModalComponent
        isOpen={modalWindowIsOpen}
        onRequestClose={toggleModal}
      >
        <YouTube
          videoId={videoId}
          className='video-player'
        />
      </ModalComponent>
    </div>
  );
  return (
    videoId && videoContainer
  )
};

Video.propTypes = {
  videoId: PropTypes.string,
};

Video.defaultProps = {
  videoId: "",
};

export default Video;