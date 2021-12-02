import React, { useState, useEffect } from 'react';
import './Slide.scss';

const Slide = ({ slideId, imgUrl }) => {
  const [animation, setAnimation] = useState('openSlide');

  useEffect(() => {
    setTimeout(() => {
      setAnimation('');
    }, 600);
    return () => {
      setAnimation('closeSlide');
      setTimeout(() => {
        console.log(1);
      }, 600);
    };
  }, []);

  return (
    <div className={`slide ${animation}`}>
      <img src={imgUrl} alt={`slide${slideId}`} className="slideImg" />
    </div>
  );
};

export default Slide;
