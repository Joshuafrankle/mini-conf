import React, { Component } from "react";
import { motion } from "framer-motion";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom"
import Particles from "./Particles"


class LandingPage extends Component {
  render() {

    const easing = [0.6, -0.05, 0.01, 0.99]; //keyframes
    const fadeIn = {
      initial: {
        opacity: 0,
      },
      animate: {
        opacity: 1,
        transition: {
          duration: 2.5,
          ease: easing,
        },
      },
    };

    const CustomButton = withStyles({
      root: {
        backgroundColor: "",
        boxShadow: "",
      },
    })(Button);

    return (
      <>
        <motion.div exit="exit" initial="initial" animate="animate">
        <motion.div variants={fadeIn}>
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
          </motion.div>
        </motion.div>

        <Particles />
      </>
    );
  }
}

export default LandingPage;
