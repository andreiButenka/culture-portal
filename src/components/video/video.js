import PropTypes from "prop-types";
import React, { useState } from "react";
import { I18n } from 'react-i18next';
import YouTube from 'react-youtube';
import ModalComponent from '../modal/modal';
import Button from '../button/button';
import './video.css';

const Video = ({ videoId, children }) => {
  const [modalWindowIsOpen, toggleModalWindow] = useState(false);

  const toggleModal = () => {
    toggleModalWindow(!modalWindowIsOpen);
  };

  const videoContainer = (
    <I18n>
      {t => (
        <div className='video-container'>
          <h2>{children}</h2>
          <Button clickHandler={toggleModal}>{t('WatchVideo')}</Button>
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
      )}
    </I18n>
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