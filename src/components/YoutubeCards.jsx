import axios from "axios";
import React from "react";
import Marquee from "react-fast-marquee";
import PopUp from "../animations/PopUp";

export default class YoutubeCards extends React.Component {
  state = {
    videoitems: [],
  };

  componentDidMount() {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails%2Cstatus&playlistId=PLLCdGWbcw9uwhUPaCmtQlHlMKyE6R7a1P&key=AIzaSyAjeovAn3aPZ68gsufq5h1gKryTMf3YPIY`
      )
      .then((res) => {
        const videoitems = res.data.items;
        console.log(videoitems);
        this.setState({ videoitems });
      });
  }

  render() {
    return (
      <div>
        <Marquee
          direction="right"
          speed={30}
          gradient
          gradientWidth={0}
          gradientColor={[31, 31, 31]}
        >
          {this.state.videoitems.map((videoitems) => (
            <PopUp
              src={
                "https://www.youtube.com/embed/" +
                videoitems.contentDetails.videoId
              }
              title={videoitems.snippet.title}
            />
          ))}
        </Marquee>
      </div>
    );
  }
}
