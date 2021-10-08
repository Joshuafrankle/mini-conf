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
        <section className="d-flex align-items-center justify-content-between mx-4 my-3">
          <Toggle />
          <a
            href="https://www.pattarai.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="img-animation" width="70" height="70" alt="" />
          </a>
          <Button class="customButton" onClick={logout}>
            LOGOUT
          </Button>
        </section>

        <section className="d-flex justify-content-center align-items-center mt-3">
          <div
            className="card"
            style={{
              minHeight: "80vh",
              width: "90%",
              boxShadow:
                "0 8px 16px 0 rgba(0, 0, 0, 0.15), 0 6px 20px 0 rgba(0, 0, 0, 0.16)",
            }}
          >
            <div className="card-body d-md-flex align-items-center d-block">
              <div id="no-stream">
                <img
                  className="img-fluid px-md-3"
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
                className="col-12 col-md-8 px-md-3 pb-3 pb-md-0 iframe-height"
                style={{ display: "none" }}
                src={NoLiveStream}
                frameBorder="0"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>

              <iframe
                title="Titan Embed"
                className="col-12 col-md-4 iframe-height"
                src="https://titanembeds.com/embed/808401706337435709?css=31"
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
