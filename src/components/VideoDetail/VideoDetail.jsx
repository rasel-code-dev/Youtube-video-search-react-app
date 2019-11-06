import React from "react";

import "./VideoDetail.css";

const VideoDetail = ({ video }) => {
  if (!video) return ""

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(videoSrc);
  
  return (
    <div className='video_detail'>
      <div className="video_player">
        <iframe
        className="iframe"
          title='Video Player'
          src={videoSrc}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="video_description">
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
