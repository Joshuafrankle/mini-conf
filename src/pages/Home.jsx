import Button from "@material-ui/core/Button";
import FadeIn from "../animations/FadeIn";
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";
import Particles from "../animations/Particles";
import YoutubeCards from "../components/YoutubeCards";
import NoLiveStream from "../assets/images/NoStream.png";
import Toggle from "../components/DarkTheme";

export default function Home() {
  const history = useHistory();

  function logout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        history.push("/");
      })
      .catch((error) => {});
  }

  return (
    <>
      <FadeIn>
        <div className="p-3 text-center">
          <div className="float-left mt-3">
            <Toggle />
          </div>
          <a
            href="https://www.pattarai.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="img-animation" width="70" height="70" alt="" />
          </a>
          <Button class="customButton float-right mt-3" onClick={logout}>
            LOGOUT
          </Button>
        </div>
        <section className="d-flex justify-content-center">
          <div
            className="card cardColor mt-3"
            style={{
              minHeight: "80vh",
              width: "90%",
              boxShadow:
                "0 8px 16px 0 rgba(0, 0, 0, 0.15), 0 6px 20px 0 rgba(0, 0, 0, 0.16)",
            }}
          >
            <div className="card-body d-md-flex d-block">
              <div id="no-stream">
                <img
                  className="img-fluid"
                  src={NoLiveStream}
                  height={400}
                  alt=""
                />
                <h5 className="text-center stream-text text-secondary">
                  Live Stream is Down. Check out our recorded events!
                </h5>
              </div>
              <iframe
                id="youtubeLive"
                title="Youtube Live Stream"
                className="col-md-8"
                style={{ minHeight: "40vh", display: "none" }}
                src={NoLiveStream}
                frameBorder="0"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>

              <iframe
                title="Titan Embed"
                className="col-md-4 col-12 titanEmbed"
                src="https://titanembeds.com/embed/808401706337435709?css=31"
                style={{ minHeight: "34vh" }}
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        </section>
        <YoutubeCards />
      </FadeIn>
      <Particles />
    </>
  );
}
