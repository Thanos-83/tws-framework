import React, { useState, useLayoutEffect, useEffect } from 'react';

function useDimensions(event) {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useLayoutEffect(() => {
    if (event === 'scroll') {
      console.log('inside scroll');

      function windowDimenstionsOnScroll() {
        // console.log(window.scrollY);
        setDimensions({
          width: window.scrollX,
          height: window.scrollY,
        });
      }
      window.addEventListener('scroll', windowDimenstionsOnScroll);
    } else if (event === 'resize') {
      console.log('inside resize');
      function handleResize() {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener('resize', handleResize);
    } else return;
  }, []);
  return dimensions;
}

export default useDimensions;
