import React, { Component } from "react";
import { motion } from "framer-motion";
import Button from "@material-ui/core/Button";
import {withStyles} from '@material-ui/core/styles';
import ParticlesBg from "particles-bg";

class App extends Component {
  render() {

    const BootstrapButton = withStyles({
      root: {
        backgroundColor: "",
      }
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
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: -10 }}
          animate={{ scale: 1.05, opacity: 1, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <section className="d-flex align-items-center justify-content-center container" style={{ height: "100vh"}}>

            <div className="text-center">
            <p className="pl-4 ml-5 text_pattarai">
              PATTARAI
            </p>

            <p className="title_word">
            Mini conf
            </p>
            
            <Button variant="contained" color="primary" className="mr-2">
              Login In
            </Button>
            <Button variant="contained" color="primary">
              Sign UP
            </Button>
            </div>
            
          </section>
          
        </motion.div>

        <ParticlesBg type="custom" config={config} bg={true} />
      </>
    );
  }
}

export default App;
