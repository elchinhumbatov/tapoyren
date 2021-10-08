import React from "react";
import { useParams } from "react-router";
import VPlayer from "@u-wave/react-vimeo";
import { Link } from "react-router-dom";
import { Close } from "@mui/icons-material";

function VideoPlayer({url}) {
  const { id: videoId } = useParams();
  return (
    <div style={{ padding: 15, border: "1px dashed gray" }}>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <h3 style={{ marginBottom: 15 }}>Indi baxilan video: {videoId}</h3>
        <Link to={url}>
          <Close />
        </Link>
      </div>
      <div style={{ width: "90%", margin: "auto" }}>
        <VPlayer video="480880800" responsive />
      </div>
    </div>
  );
}

export default VideoPlayer;
