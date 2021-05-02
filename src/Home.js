import React, { Component } from "react";
import Particles from "./Particles";
class Home extends Component {
  render() {
    return (
      <>
      
        <div className="justify-content-center d-flex mt-2 mb-4">
          <img className="img-animation" width="120" height="120" alt="image" />
        </div>

        <section className="ml-5 container">
        <iframe
            src="https://clips.twitch.tv/embed?clip=<slug>&parent=streamernews.example.com"
            height="500"
            width="1100"
            allowfullscreen="<allow full screen>">
        </iframe>
        </section>

        <section>

        </section>
        <Particles/>
      </>
    );
  }
}

export default Home;
