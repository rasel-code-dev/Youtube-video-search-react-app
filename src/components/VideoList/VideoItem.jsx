import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {  
  return (
    <div className="video-item" onClick={()=> onVideoSelect(video)}>
      <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} srcSet=""/>
      <div className="title">{video.snippet.title}</div>
    </div>
  );
};

export default VideoItem;
