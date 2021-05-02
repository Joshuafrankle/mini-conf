import React, { Component } from "react";
import { motion } from "framer-motion";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom"
import ParticlesBg from "particles-bg";


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

    let config = {
      num: [1, 3],
      rps: 0.5,
      radius: [50, 100],
      life: [1.5, 3],
      v: [0.2, 0.5],
      tha: [-40, 40],
      alpha: [2, 1],
      scale: [0.1, 0.4],
      position: "all",
      color: ["#833ab4", "#1dfdd8"],
      cross: "dead",
      random: 15,
    };

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

        <ParticlesBg type="custom" config={config} bg={true} />
      </>
    );
  }
}

export default LandingPage;
