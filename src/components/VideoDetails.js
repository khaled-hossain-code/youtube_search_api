import React, { Component } from 'react';

const VideoDetails = ({video}) => {
  if(!video){ return 'Loading...'}

  const videoId = video.id.videoId;
  const url = `http://www.youtube.com/embed/${videoId}`;
  return(
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe src={url} className="embed-responsive-item"></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetails;