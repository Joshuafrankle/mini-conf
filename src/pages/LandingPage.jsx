import firebase from "firebase/app";
import "firebase/auth";
import "../firebase";
import Button from "@material-ui/core/Button";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import FadeIn from "../animations/FadeIn";
import Particles from "../animations/Particles";
import { checkTheme } from "./theme";
import Toggle from "../components/DarkTheme";

export default function LandingPage() {
  const history = useHistory();

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      history.push("/home");
    }
  });

  function signInWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
      })
      .catch((error) => {
        // var errorCode = error.code;
        // var errorMessage = error.message;
      });
  }

  useEffect(() => {
    checkTheme();
  }, []);

  return (
    <>
      <FadeIn>
        <div>
          <p className="pt-3 float-left ml-3 homeTheme">
            <Toggle />
          </p>
        </div>
        <div
          className="d-flex align-items-center justify-content-center container main-bg"
          style={{ height: "100vh" }}
        >
          <div className="text-center">
            <p className="pl-md-5 pl-0 text-pattarai">PATTARAI</p>
            <p className="title-word">Mini Conf</p>
            <Button class="customButton" onClick={signInWithGoogle}>
              SIGN IN
            </Button>
          </div>
        </div>
      </FadeIn>
      <Particles />
    </>
  );
}
