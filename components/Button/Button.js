import React from 'react';

function Button({ text }) {
  return (
    <div className='tws_button'>
      <a href='#'>{text}</a>
    </div>
  );
}

export default Button;
