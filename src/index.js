import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/SearchBar';

const API_KEY = 'AIzaSyCHClV92Y6q2AhTK4SCMblX5uh-eVnjJr8'

const App = () => {
  return(
    <div>
      <SearchBar />
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('.container'));
