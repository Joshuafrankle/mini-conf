import Button from "@material-ui/core/Button";
// import { withStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import FadeIn from "../animations/FadeIn";
import Particles from "../animations/Particles";
import "./firebase";

function LandingPage() {
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
        console.log(result);
        /** @type {firebase.auth.OAuthCredential} */
        // var credential = result.credential;
      })
      .catch((error) => {
        // var errorCode = error.code;
        // var errorMessage = error.message;
      });
  }

  // const CustomButton = withStyles({
  //   root: {
  //     backgroundColor: "",
  //     boxShadow: "",
  //   },
  // })(Button);

  return (
    <>
      <FadeIn>
        <section
          className="d-flex align-items-center justify-content-center container"
          style={{ height: "100vh" }}
        >
          <div className="text-center container">
            <p className="pl-md-5 pl-0 text-pattarai">PATTARAI</p>
            <p className="title-word">Mini Conf</p>

            <Button
              variant="contained"
              color="primary"
              onClick={signInWithGoogle}
            >
              Sign in
            </Button>

            {/* <CustomButton variant="contained" color="primary" className="ml-2">
              Login In
            </CustomButton> */}
          </div>
        </section>
      </FadeIn>
      <Particles />
    </>
  );
}

export default LandingPage;
