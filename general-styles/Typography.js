import React from 'react';

function Typography({ variant, children }) {
  return (
    <div className={variant}>
      <h1>{children}</h1>
    </div>
    // <h1 className={`typography ${variant}`}>{children}</h1>
  );
}

export default Typography;
