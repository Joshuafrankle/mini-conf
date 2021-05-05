import { Button } from "@material-ui/core";
import FadeIn from "../animations/FadeIn";
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";

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
        <Button varient="contained" onclick={logout}>
          Logout
        </Button>
        <section className="container">
          <div className="justify-content-center d-flex mt-2 mb-4">
            <img
              className="img-animation"
              width="120"
              height="120"
              alt="image"
            />
          </div>
          <iframe
            src="https://clips.twitch.tv/embed?clip=<slug>&parent=streamernews.example.com"
            height="500"
            width="1100"
            allowfullscreen="<allow full screen>"
          ></iframe>
        </section>
      </FadeIn>
    </>
  );
}

export default Home;
