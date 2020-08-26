import React, { useRef, useState } from "react";
import VideoHeader from "../components/VideoHeader.js";
import VideoFooter from "../components/VideoFooter.js";
import "./VideoCard.css";

function VideoCard({ url, likes, shares, channel, avatarSrc, song }) {
  const [isVideoPlaying, setIsvideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (isVideoPlaying) {
      // stop
      videoRef.current.pause();
      setIsvideoPlaying(false);
    } else {
      // play
      videoRef.current.play();
      setIsvideoPlaying(true);
    }
  };

  return (
    <div className="videoCard">
      <VideoHeader />
      <video
        ref={videoRef}
        onClick={onVideoPress}
        className="videoCard__player"
        src={url}
        alt="IG Reel Video"
        loop
      />

      <VideoFooter 
       channel={channel}
       avatarSrc={avatarSrc}
       song={song}
       likes={likes}
       shares={shares}
      />
    </div>
  );
}

export default VideoCard;
