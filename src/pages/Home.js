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
      <div className="p-3">
        <img className="img-animation" width="70" height="70" alt="" />
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
        style={{ height: "80vh" }}
      >
        <div
          className="card mt-3"
          style={{
            height: "100%",
            width: "90%",
            boxShadow:
              "0 8px 16px 0 rgba(0, 0, 0, 0.15), 0 6px 20px 0 rgba(0, 0, 0, 0.16)",
          }}
        >
          <div className="card-body d-flex">
            <iframe
              className="col-md-8 col-12"
              style={{ height: "auto" }}
              src="https://www.youtube.com/embed/BFfMbHRdg54"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>

            <iframe
              className="col-md-4 col-12"
              src="https://titanembeds.com/embed/808401706337435709"
              style={{ height: "auto" }}
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
          src="https://www.youtube.com/watch?v=gQRX1UlQ0Rs"
          title="Pattarai's Intro | Who are we? | Special Event | May 2021"
        />
      </Marquee>
      <Particles />
    </>
  );
}

export default Home;
