import React from "react";
import VideoItem from "./VideoItem";

import "./VideoList.css";

const VideoList = ({videos, startLoading, onVideoSelect}) => {
  const title = startLoading ? "Loading..." : videos.length <=0 ? "No Videos Found" : "Videos"
  return (
      <div className="video-list">
        <h1>{title}</h1>
          { videos.map(video => {          
            return <VideoItem onVideoSelect={onVideoSelect} key={video.id.videoId} video={video} />;
          }) }
      </div>
  );
};

export default VideoList;
