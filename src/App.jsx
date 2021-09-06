import React, { useEffect, useState } from 'react';
import Input from './components/Input';
import ListDropDown from './components/ListDropDown';
import './App.css';

const data = [
  'autocomplete off',
  'autocompletetextview',
  'autocomplete off not working',
  'autocomplete js',
  'autocomplete react',
  'autocomplete chrome',
  'autocomplete vim',
  'autocomplete textview android',
  'autocomplete=newpassword',
  'autocomplete=last',
  'last',
];

const App = () => {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!search) {
      return setItems([]);
    }

    let dynamicRegExp = new RegExp(`^${search.toLowerCase()}`);

    setItems(data.filter((item) => dynamicRegExp.test(item)));
  }, [search]);

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onItemClick = (e) => {
    setSearch(e.target.textContent);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSearch('');
    alert(`${search}`);
  };

  return (
    <div className='input-wrapper'>
      <form className='search' onSubmit={onSubmit}>
        <input
          type='text'
          className='search__input'
          placeholder='Search'
          value={search}
          onChange={onChange}
        />
        <button className='search__button' type='submit'>
          Search
        </button>
      </form>
      <div className='list'>
        {items.map((item) => (
          <h4 className='list-item' key={item} onClick={onItemClick}>
            {item}
          </h4>
        ))}
      </div>
    </div>
  );
};

export default App;
