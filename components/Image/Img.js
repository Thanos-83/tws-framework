import React from 'react';
import Image from 'next/image';
function Img() {
  return (
    <div className='w-full'>
      <img
        src='https://source.unsplash.com/random/1800x900'
        // width={800}
        // height={600}
      />
    </div>
  );
}

export default Img;
