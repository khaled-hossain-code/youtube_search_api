import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import keys from './config/keys'; 

import SearchBar from './components/SearchBar';

YTSearch({
  key: keys.API_KEY,
  term: 'surfboards'
}, data => console.log(data))

const App = () => {
  return(
    <div>
      <SearchBar />
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('.container'));
