import { connect } from 'react-redux';
import App from '../App.js';
import playAgain from '../actions/newGame.js';

const mapStateToProps = (state) => ({
  board: state.board,
  gameover: state.gameover,
  counter: state.counter,
  win: state.win,
});

const mapDispatchToProps = (dispatch) => ({
  onPlayAgain: (size) => {
    switch (size) {
      case '':
        dispatch(playAgain({
          rows: 10,
          cols: 10,
          bombs: 10,
        }));
        break;
      default:
    }
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);