import Button from "@material-ui/core/Button";
import FadeIn from "../animations/FadeIn";
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";
import Particles from "../animations/Particles";
import Marquee from "react-fast-marquee";
import PopUp from "../animations/Carousel";

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
      <div className="container mt-3 justify-content-center ">
        <div className="row">
          <iframe
            className="col-md-8 col-12"
            style={{ height: "80vh" }}
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
      <Marquee
        direction="right"
        speed={30}
        gradient
        gradientWidth={0}
        gradientColor={[31, 31, 31]}
      >
        <PopUp
          src="https://www.youtube.com/watch?v=gQRX1UlQ0Rs"
          title="Pattarai's Intro | Who are we? | Special Event | May 2021"
          text="Check out the intro we made for Pattarai's Special Event. Made with Cinema4D. "
        />
      </Marquee>
      <Particles />
    </>
  );
}

export default Home;
