import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Kid from './Components/Kid/Kid'
import Teacher from './Components/Teacher/Teacher'
import Judges from './Components/Judges/Judges'

class App extends Component {
  constructor() {
    super()
    this.state = {
      volume: null,
      emotion: null,
      stars: 0,
      judgeLeave: false
    }

    this.updateSteps = this.updateSteps.bind(this)
    this.applauds = this.applauds.bind(this)
    this.setStars = this.setStars.bind(this)
    this.availableKid = this.availableKid.bind(this)
    this.availableJudge = this.availableJudge.bind(this)
  }

  static getDerivedStateFromProps() {
    // console.log("volume****")

    return { volume: 5 }
  }

  updateSteps(furtherSteps) {
    this.setState({ furtherSteps })
  }

  applauds() {
    // console.log('happy ho gya')
    this.setState({
      emotion: 'happy'
    })
  }

  setStars(stars) {
    this.setState({ stars })
    console.log(stars)
  }

  availableKid() {
    this.setState({
      kidLeave: true
    })
  }

  availableJudge() {
    this.setState({
      judgeLeave: true
    })
  }
  render() {
    const { volume, furtherSteps, emotion, stars, kidLeave, judgeLeave } = this.state

    // console.log("render volume***", volume)
    // console.log("furtherSteps***", furtherSteps)
    // console.log("applaud****", emotion)

    return (
      <div className="App">
        {!kidLeave && <Kid dressColor="green" furtherSteps={furtherSteps} emotion={emotion} stars={stars} availableJudge={this.availableJudge} />}
        <Teacher updateSteps={this.updateSteps} />
        {!judgeLeave && <Judges applauds={this.applauds} setStars={this.setStars} />}
        {stars == 4 && <button onClick={this.availableKid}>Leave</button>}
      </div>
    );
  }
}

export default App;
