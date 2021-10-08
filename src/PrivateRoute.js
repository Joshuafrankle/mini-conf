import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import firebase from "firebase/app";
import LinearProgress from "@material-ui/core/LinearProgress";

export default function HomeRoute(props) {
  const Component = props.component;
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        setUser(false);
        setLoading(false);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading ? (
        <div
          className="d-flex align-items-center justify-content-center px-3"
          style={{ height: "100vh", width: "100vw" }}
        >
          <LinearProgress />
        </div>
      ) : user ? (
        <Component />
      ) : (
        <Redirect to={{ pathname: "/" }} />
      )}
    </>
  );
}
