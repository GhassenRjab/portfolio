import React from "react";
import PropTypes from "prop-types";

const Gallery = ({ images }) => {
  return (
    <div className="row">
      {images.map((obj, i) => {
        return (
          <article className="6u 12u$(xsmall) work-item" key={i}>
            <span className="image fit">
              <img src={obj.thumbnail} alt={obj.caption} />
            </span>

            <h3>{obj.caption}</h3>
            <p>{obj.description}</p>
          </article>
        );
      })}
    </div>
  );
};

Gallery.displayName = "Gallery";
Gallery.propTypes = {
  images: PropTypes.array,
};

export default Gallery;
