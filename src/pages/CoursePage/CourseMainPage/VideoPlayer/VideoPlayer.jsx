import React, {useState} from "react";
import { useParams } from "react-router";
import VPlayer from "@u-wave/react-vimeo";
import { Link } from "react-router-dom";
import { Close } from "@mui/icons-material";
import Loader from "../../../../components/Loader/Loader";

function VideoPlayer({url}) {
  const { id: videoId } = useParams();
  const [ready, setReady] = useState(true);

  const handleReady = () => {
    setReady(prev => prev = false);
  }
  return (
    <div style={{ padding: 15, minHeight: '50vh'}}>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <h3 style={{ marginBottom: 15 }}>Indi baxilan video: {videoId}</h3>
        <Link to={url}>
          <Close />
        </Link>
      </div>
      <div style={{ width: "90%", margin: "auto" }}>
        <VPlayer video="438371246" responsive onReady={handleReady} />
        {ready && <Loader /> }
      </div>
    </div>
  );
}

export default VideoPlayer;
