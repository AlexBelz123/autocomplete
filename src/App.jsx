import React from 'react';
import AutocompleteInput from './components/AutocompleteInput';
import './App.css';

const LIMIT_SUGGESTIONS = 10;

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
  // data -> string[], limit -> number
  return <AutocompleteInput data={data} limit={LIMIT_SUGGESTIONS} />;
};

export default App;
