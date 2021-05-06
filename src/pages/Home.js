import Button from "@material-ui/core/Button";
import FadeIn from "../animations/FadeIn";
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";
import Particles from "../animations/Particles";
import Marquee from "react-fast-marquee";
import Carousel from "../animations/Carousel";

function Home() {
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
        <div className="p-3">
          <a
            href="https://www.pattarai.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="img-animation" width="70" height="70" alt="" />
          </a>
          <Button
            variant="contained"
            className="float-right mt-3"
            color="primary"
            onClick={logout}
          >
            Logout
          </Button>
        </div>
        <section
          className="d-flex justify-content-center"
          style={{ height: "" }}
        >
          <div
            className="card mt-3"
            style={{
              height: "80vh",
              width: "90%",
              boxShadow:
                "0 8px 16px 0 rgba(0, 0, 0, 0.15), 0 6px 20px 0 rgba(0, 0, 0, 0.16)",
            }}
          >
            <div className="card-body d-md-flex d-block">
              <iframe
                className="col-md-8 col-12"
                style={{ minHeight: "40vh" }}
                src="https://www.youtube.com/embed/BFfMbHRdg54"
                frameborder="0"
                allowfullscreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>

              <iframe
                className="col-md-4 col-12"
                src="https://titanembeds.com/embed/808401706337435709"
                style={{ minHeight: "35vh" }}
                frameborder="0"
              ></iframe>
            </div>
          </div>
        </section>
        <Marquee
          direction="right"
          speed={30}
          gradient
          gradientWidth={0}
          gradientColor={[31, 31, 31]}
        >
          <Carousel
            src="https://www.youtube.com/embed/gQRX1UlQ0Rs"
            title="Pattarai's Intro | Who are we? | Special Event | May 2021"
          />
        </Marquee>
        <Particles />
      </FadeIn>
    </>
  );
}

export default Home;
