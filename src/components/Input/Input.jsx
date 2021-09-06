import React, { useState } from 'react';
import './Input.css';

const Input = ({ action }) => {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
    action(e.target.value);
  };

  return (
    <div className='search'>
      <input
        type='text'
        className='search__input'
        placeholder='Search'
        value={search}
        onChange={handleChange}
      />
      <button className='search__button'>Search</button>
    </div>
  );
};

export default Input;
