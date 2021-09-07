import React, { useEffect, useState, useRef, useMemo } from 'react';
import useOutsideClick from '../../hooks/useOutsideClick';
import getHighlightedText from '../../utils/getHighlightedText';
import './AutocompleteInput.css';

const AutocompleteInput = ({ data, limit }) => {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState([]);
  const [hide, setHide] = useState(false);
  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, () => setHide(true)); // handle click on the outside 

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
    let text = e.target.textContent;
    if (e.target.nodeName === 'SPAN') {
      text = e.target.parentElement.textContent;
    }
    setSearch(text);
    setHide(true);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSearch('');
    alert(search);
  };

  return (
    <div ref={wrapperRef} className='input-wrapper'>
      <form className='search' onSubmit={onSubmit}>
        <input
          type='text'
          className='search__input'
          placeholder='Search'
          value={search}
          onChange={onChange}
          onFocus={() => setHide(false)}
        />
        <button className='search__button' type='submit'>
          Search
        </button>
      </form>
      <div className={`list ${hide ? 'hide' : ''}`}>
        {items.slice(0, limit).map((item) => (
          <h4 className='list-item' key={item} onClick={onItemClick}>
            {getHighlightedText(item, search)}
          </h4>
        ))}
      </div>
    </div>
  );
};

export default AutocompleteInput;
