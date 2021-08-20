import { connect } from 'react-redux';
import Board from '../Board.js';
import move from '../actions/move.js';
import setFlag from '../actions/setFlag.js';

const mapStateToProps = (state) => ({
  board: state.board,
  gameover: state.gameover
});

const mapDispatchToProps = (dispatch) => ({
  handleCellClick: (x,y) => {
    dispatch(move(x,y));
  },
  handleRightClick: (x,y) => {
    dispatch(setFlag(x,y));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Board);