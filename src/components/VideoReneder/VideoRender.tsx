import React from "react";
import ReactPlayer from "react-player";
import "./VideoRender.scss";

type VideoProps = {
  url: any;
  close: any;
};

export const VideoRender: React.FC<VideoProps> = ({ url, close }) => {
  return (
    <>
      <ReactPlayer url={url} playing />
      <button className="close-video-button" onClick={close}>
        Close me
      </button>
    </>
  );
};
