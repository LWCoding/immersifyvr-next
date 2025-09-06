"use client";

import { useState } from 'react';
import styles from './imageGallery.module.css';

export default function ImageGallery({ images, altText }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.gallery}>
      <button 
        className={styles.arrow} 
        onClick={goToPrevious}
        aria-label="Previous image"
      >
        ‹
      </button>
      <img 
        src={images[currentImageIndex]} 
        alt={`${altText} - Image ${currentImageIndex + 1}`}
        className={styles.image}
      />
      <button 
        className={styles.arrow} 
        onClick={goToNext}
        aria-label="Next image"
      >
        ›
      </button>
    </div>
  );
}
