import React from "react";
import ReactPlayer from "react-player";

function Video() {
  const videoEnded = () => {
    alert("on va tous MUUUUUURRRRRIIIIIIIRRRRRRRRRREEEEEEE");
  };
  const externalSource = "https://www.youtube.com/watch?v=qcs-PRy9NSY";
  return (
    <div>
      <ReactPlayer
        url={externalSource}
        controls
        playing
        muted
        onEnded={videoEnded}
      />
    </div>
  );
}

export default Video;
