import { useState, useEffect } from "react";
import axios from "axios";
import Marquee from "react-fast-marquee";
import PopUp from "../animations/PopUpCards";

export default function YoutubeCards() {
  const { REACT_APP_YOUTUBE_API_KEY } = process.env;
  const [videoItems, setVideoItems] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails%2Cstatus&playlistId=PLLCdGWbcw9uwhUPaCmtQlHlMKyE6R7a1P&key=${REACT_APP_YOUTUBE_API_KEY}`
      )
      .then((res) => {
        const videoitems = res.data.items;
        setVideoItems(videoitems);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {videoItems && (
        <Marquee
          direction="right"
          speed={30}
          gradient
          gradientWidth={0}
          gradientColor={[31, 31, 31]}
        >
          {videoItems.map((videos, id) => (
            <button
              key={id}
              onClick={() => {
                window.scrollTo(0, 0);
                var livestream = document.getElementById("youtubeLive");
                livestream.style.display = "block";
                document.getElementById("no-stream").style.display = "none";
                livestream.src =
                  "https://www.youtube.com/embed/" +
                  videos.contentDetails.videoId;
              }}
            >
              <PopUp
                src={videos.snippet.thumbnails.high.url}
                title={videos.snippet.title}
              />
            </button>
          ))}
        </Marquee>
      )}
    </>
  );
}
