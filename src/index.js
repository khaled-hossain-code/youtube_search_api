import _ from 'lodash';
import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

import keys from "./config/keys";

import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetails from "./components/VideoDetails";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surf board')
  }

  videoSearch(term) {
    YTSearch(
      {
        key: keys.API_KEY,
        term: term
      },
      videos => this.setState({ videos, selectedVideo: videos[0] })
    );
  }

  render() {
    const videoSearch = _.debounce(term => this.videoSearch(term), 300);

    return (
      <div>
        <SearchBar onSearch={videoSearch} />
        <VideoDetails
          video={this.state.selectedVideo}
        />
        <VideoList 
          onVideoSelect={ selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} 
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
