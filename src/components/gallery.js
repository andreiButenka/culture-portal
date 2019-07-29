import PropTypes from "prop-types";
import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // style for carousel
import './gallery.css';

const Gallery = ({ galleryPictures }) => {

  return (!galleryPictures || !galleryPictures.length ? '' :
    <div>
      <h2>Gallery</h2>
      <Carousel infiniteLoop={true} width='700px' autoPlay={true}>
        {galleryPictures.map(({ file: { url }, description }) => {
          return (
            <div key={`${description}+${url}`} className='carousel-container'>
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