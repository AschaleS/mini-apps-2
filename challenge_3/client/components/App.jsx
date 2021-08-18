import React from 'react';
import ReactDOM from 'react-dom'

import ScoreCard from './ScoreCard.jsx';



class App extends React.Component {
  constructor() {
    super();

    this.state = {
      frame: 1,
      frame2: 1,
      firstBowl: 0,
      secondBowl: 0,
      score: 0,
      strikeBonus: 0,
      spareBonus: 0
    }
    this.pinSelection = this.pinSelection.bind(this);
  }

  pinSelection(e) {
    var points = Number(e.target.value);

    if (this.state.strikeBonus > 3) {
      this.setState({
        strikeBonus: 0
      })
    }
    if (this.state.spareBonus > 2) {
      this.setState({
        spareBonus: 0
      })
    }
    this.setState({
      frame2: this.state.frame2 + 1,
      score: this.state.score + points,
    })
    if (this.state.frame2 === 1) {
      if (this.state.strikeBonus === 1) {
        this.setState({
          score: this.state.score + (points * 2),
          strikeBonus: this.state.strikeBonus + 1
        })
      }
      if (this.state.spareBonus === 1) {
        this.setState({
          score: this.state.score + (points * 2),
          spareBonus: this.state.spareBonus + 1
        })
      }
      this.setState({
        firstBowl: points
      })
    }
    if (this.state.frame2 === 2) {
      if (this.state.strikeBonus === 2) {
        this.setState({
          score: this.state.score + (points * 2),
          strikeBonus: this.state.strikeBonus + 1
        })
      }
      this.setState({
        secondBowl: points,
        frame: this.state.frame + 1,
        frame2: 1
      })
    }

    if (points === 10 && this.state.frame2 === 1) {
      this.setState({
        frame: this.state.frame + 1,
        frame2: 1,
        strikeBonus: this.state.strikeBonus + 1
      })
    }

    if (this.state.firstBowl + points === 10) {
      this.setState({
        spareBonus: 1
      })
    }

    if (this.state.frame === 10) {
      alert('The Game is Over! Your Total Score is: ' + this.state.score);
      this.setState({
        frame: 1,
        frame2: 1,
        firstBowl: 0,
        secondBowl: 0,
        score: 0,
        strikeBonus: 0,
        spareBonus: 0
      })
    }
  }



  render() {

    return (

      <div style={{alignItems: "center", padding: "25px"}}>
        <h2>Bowling</h2>
      <div>
        <button value='1' onClick={(e) => this.pinSelection(e)}>1</button>
        <button value='2' onClick={(e) => this.pinSelection(e)}>2</button>
        <button value='3' onClick={(e) => this.pinSelection(e)}>3</button><br/>
        <button value='4' onClick={(e) => this.pinSelection(e)}>4</button>
        <button value='5' onClick={(e) => this.pinSelection(e)}>5</button>
        <button value='6' onClick={(e) => this.pinSelection(e)}>6</button><br/>
        <button value='7' onClick={(e) => this.pinSelection(e)}>7</button>
        <button value='8' onClick={(e) => this.pinSelection(e)}>8</button>
        <button value='9' onClick={(e) => this.pinSelection(e)}>9</button><br/>
        <button value='10' onClick={(e) => this.pinSelection(e)}>10</button>
        <button value='0' onClick={(e) => this.pinSelection(e)}>0</button>
        <button value='*'>*</button>
        <ScoreCard score={this.state} />
        </div>

      </div>
    )
  }
}
export default App;
