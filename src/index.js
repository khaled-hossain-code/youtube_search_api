import React from 'react';
import ReactDOM from 'react-dom';

import {API_KEY} from './config/keys'; 
import SearchBar from './components/SearchBar';


const App = () => {
  return(
    <div>
      <SearchBar />
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('.container'));
