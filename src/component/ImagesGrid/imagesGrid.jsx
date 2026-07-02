// src/component/ImagesGrid/imagesGrid.jsx
import React from "react";
import "./ImagesGrid.css";
import { Link } from "react-router-dom";

const ImagesGrid = ({ images, wrapperClassName }) => {
  return (
    <div className={wrapperClassName}>
      {images.map((image, index) => (
        <div key={index} className={image.className || "gridItem"}>
          <div className="gridCardWrapper">
            {/* 🔹 Label on top of each image */}
            {image.title && (
              <div className="gridItemLabel">{image.title}</div>
            )}

            {image.link ? (
              <Link to={image.link}>
                <img
                  className="gridImage"
                  src={image.src}
                  alt={image.title}
                />
              </Link>
            ) : (
              <img
                className="gridImage "
                src={image.src}
                alt={image.title}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImagesGrid;
