import React from 'react';
import './ListDropDown.css';

// items string[]
const ListDropDown = ({ items }) => {
  return (
    <div className='list'>
      {items.map((item) => (
        <h4 className='list-item' key={item}>
          {item}
        </h4>
      ))}
    </div>
  );
};

export default ListDropDown;
