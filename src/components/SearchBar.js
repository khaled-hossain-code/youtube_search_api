import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temp: ''
    }
  }

  render(){
    return(
      <div>
        <input 
        value={ this.state.temp }
        onChange={ event => this.setState({ temp: event.target.value + '1' })} 
        />
        <h2>Your Input is {this.state.temp}</h2>
      </div>
    )
  }

  onInputChange(event){
    console.log(event.target.value);
  }
}

export default SearchBar;