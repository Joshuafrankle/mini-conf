import axios from "axios";
import React from "react";
import Marquee from "react-fast-marquee";
import PopUp from "../animations/PopUpCards";
import { animateScroll as scroll } from "react-scroll";

const { REACT_APP_YOUTUBE_API_KEY } = process.env;

export default class YoutubeCards extends React.Component {
  state = {
    videoitems: [],
  };

  componentDidMount() {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails%2Cstatus&playlistId=PLLCdGWbcw9uwhUPaCmtQlHlMKyE6R7a1P&key=${REACT_APP_YOUTUBE_API_KEY}`
      )
      .then((res) => {
        const videoitems = res.data.items;
        //console.log(videoitems);
        this.setState({ videoitems });
      });
  }

  render() {
    function scrollTop() {
      scroll.scrollMore(-330);
    }
    return (
      <div>
        <Marquee
          direction="right"
          speed={30}
          gradient
          gradientWidth={0}
          gradientColor={[31, 31, 31]}
        >
          {this.state.videoitems.map((videoitems, id) => (
            <button
              key={id}
              onClick={() => {
                scrollTop();
                var livestream = document.getElementById("youtubeLive");
                livestream.style.display = "block";
                document.getElementById("no-stream").style.display = "none";
                livestream.src =
                  "https://www.youtube.com/embed/" +
                  videoitems.contentDetails.videoId;
              }}
            >
              <PopUp
                src={videoitems.snippet.thumbnails.high.url}
                title={videoitems.snippet.title}
              />
            </button>
          ))}
        </Marquee>
      </div>
    );
  }
}
