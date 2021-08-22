import React from 'react';
import BoardContainer from '../src/containers/BoardContainers.js'
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardSize: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { onPlayAgain, gameover, counter, win } = this.props;
    const { boardSize} = this.state;
    return (
      <div className="App">
        <h2 style={{color: "#15a52c", fontFamily: "American Typewriter"}}>Play by finding all the boxes without mines! </h2>

         <form onSubmit={(e) => {
          e.preventDefault();
          onPlayAgain(boardSize);
        }}>
           <button type="submit">New Game</button>
        </form>
        {gameover &&
          <div className="game-over">Game over! You Just Lost!</div>
        }
        {win &&
          <div className="win">Congrats, you won the Game!</div>
        }
        {counter > -1 &&
          <div>
            <BoardContainer />
          </div>
        }
      </div>
    );
  }
}

export default App;

