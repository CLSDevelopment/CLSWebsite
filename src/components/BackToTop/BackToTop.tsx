import React, { useState, useEffect } from 'react';
import { Arrow } from '../Arrow/Arrow';

import './BackToTop.scss';

export const BackToTop = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const backToTopClasses = ['scrollTop', !!scrollPosition && 'scroll-shadow'];

  const handleScroll = (event) => {
    if (window.pageYOffset < 400) {
      setScrollPosition(window.scrollY);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={backToTopClasses.join(' ')} onClick={scrollTop}>
      <Arrow direction="up" />
    </div>
  );
};

export default BackToTop;