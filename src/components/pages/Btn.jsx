// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const Btn = ({ btnClass, children }) => {
  return (
    <button className={btnClass}>
      {children}
    </button>
  );
};

export default Btn;
