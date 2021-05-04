import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import FadeIn from "./FadeIn";

function LandingPage() {
  const CustomButton = withStyles({
    root: {
      backgroundColor: "",
      boxShadow: "",
    },
  })(Button);

  return (
    <>
      <FadeIn>
        <section
          className="d-flex align-items-center justify-content-center container"
          style={{ height: "100vh" }}
        >
          <div className="text-center">
            <p className="pl-4 ml-5 text-pattarai">PATTARAI</p>
            <p className="title-word">Mini Conf</p>
            <Link to="/home">
              <CustomButton
                variant="contained"
                color="primary"
                className="mr-2"
              >
                Login In
              </CustomButton>
            </Link>
            <Button variant="contained" color="primary">
              Sign UP
            </Button>
          </div>
        </section>
      </FadeIn>
    </>
  );
}

export default LandingPage;
