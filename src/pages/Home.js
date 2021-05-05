import Button from "@material-ui/core/Button";
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
        <div className="p-3">
          <img className="img-animation" width="70" height="70" alt="" />
          <Button
            variant="contained"
            className="float-right"
            color="primary"
            onClick={logout}
          >
            Logout
          </Button>
        </div>
        <div className="container mt-3 justify-content-center d-flex">
          <iframe
            className=""
            width="1000"
            height="450"
            src="https://www.youtube.com/embed/BFfMbHRdg54"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </FadeIn>
    </>
  );
}

export default Home;
