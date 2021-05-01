import React, { Component } from 'react'

import ParticlesBg from 'particles-bg'

class App extends Component {
  render () {

    let config = {
      num: [1, 5],
      rps: 0.5,
      radius: [50, 100],
      life: [1.5, 3],
      v: [0.2, 0.5],
      tha: [-40, 40],
      alpha: [2, 1],
      scale: [.1, 0.4],
      position: "all",
      color:  ["#833ab4", "#1dfdd8"],
      cross: "dead",
      // emitter: "follow",
      random: 15
    }
      
    return (
      <>
        <div class="title_word">Workshop Hub</div>
        <ParticlesBg num={10} type="custom" config={config}  bg={true} />
      </>
    )
  }
}

export default App;
