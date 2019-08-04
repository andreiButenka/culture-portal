import PropTypes from "prop-types";
import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // style for carousel
import './gallery.css';

const Gallery = ({ galleryPictures, children }) => {

  return (!galleryPictures || !galleryPictures.length ? '' :
    <div>
      <h2>{children}</h2>
      <Carousel infiniteLoop={true} autoPlay={true} useKeyboardArrows={true} className='carousel-container'>
        {galleryPictures.map(({ file: { url }, description }) => {
          return (
            <div key={`${description}+${url}`} className='gallery-container'>
              <img src={url} alt={description} className='gallery-img'/>
              <p className="legend">{description}</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

Gallery.propTypes = {
  galleryPictures: PropTypes.array,
};

Gallery.defaultProps = {
  galleryPictures: [],
};

export default Gallery;