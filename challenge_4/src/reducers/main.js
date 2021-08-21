import { NEWGAME } from '../actions/newGame.js';
import { SETFLAG } from '../actions/setFlag.js';
import { MOVE } from '../actions/move.js';


const rootReducer = (state = { win: false, gameover: false, board: [] }, action) => {
  switch (action.type) {
    case NEWGAME: {
      const { rows, cols, bombs } = action.payload;
      const board = [];
      for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < cols; j++) {
          board[i][j] = {
            flag: false,
            explored: false,
            value: 0,
          }
        }
      }
      // Adding mines  and values into the board
      let b = bombs;
      while (b > 0) {
        let x = Math.floor(Math.random() * rows);
        let y = Math.floor(Math.random() * cols);
        if (board[x][y].value !== 11) {
          board[x][y].value = 9;
          b--;
        }
      }

      for (let k = 0; k < rows; k++) {
        for (let l = 0; l < cols; l++) {
          let count = 0;
          if (board[k][l].value !== 9) {
            if (k > 0 && l > 0 && board[k - 1][l - 1].value === 9) {
              count++;
            }
            if (k > 0 && board[k - 1][l].value === 9) {
              count++;
            }
            if (k > 0 && l < cols - 1 && board[k - 1][l + 1].value === 9) {
              count++;
            }
            if (l > 0 && board[k][l - 1].value === 9) {
              count++;
            }
            if (l < cols - 1 && board[k][l + 1].value === 9) {
              count++;
            }
            if (k < rows - 1 && l > 0 && board[k + 1][l - 1].value === 9) {
              count++;
            }
            if (k < rows - 1 && board[k + 1][l].value === 9) {
              count++;
            }
            if (k < rows - 1 && l < cols - 1 && board[k + 1][l + 1].value === 9) {
              count++;
            }
            if (count === 0) {
              board[k][l].value = '';
            } else {
              board[k][l].value = count;
            }
          }
        }
      }

      return {
        ...state,
        board,
        win: false,
        gameover: false,
        counter: bombs
      };
    };
    case SETFLAG: {
      const { x, y } = action.payload;
      const board = state.board.slice();
      let counter = state.counter;
      if (board[x][y].flag) {
        board[x][y].flag = false;
        counter++;
      } else {
        board[x][y].flag = true;
        counter--;
      }

      return {
        ...state,
        board,
        counter
      };
    };
    case MOVE: {
      if (state.gameover){
        return state;
        }
        if (state.win){
          return state;
        }
      const { x, y } = action.payload;
      const board = state.board.slice();
      board[x][y].flag = false;
      showMore(board, x, y);

      // Check if the gane is over or a win
      if (board[x][y].value === 9) {
        for (let i = 0; i < board.length; i++) {
          for (let j = 0; j < board[i].length; j++) {
            if (board[i][j].value === 9) {
              board[i][j].explored = true;
            }
          }
        }
        state.gameover = true;
      } else {
        let isWin = true;
        for (let i = 0; i < board.length; i++) {
          for (let j = 0; j < board[i].length; j++) {
            if (board[i][j].explored === false && board[i][j].value !== 9) {
              isWin = false;
              break;
            }
          }
        }
        state.win = isWin;
      }

      return {
        ...state,
        board
      };
    }
    default:
      return state;
  }
};

// Check if the cell is valid
var showMore = (board, x, y) => {
  if (x >= board.length || x < 0 ||
    y >= board[0].length || y < 0 ||
    board[x][y].explored) {
    return;
  }
  board[x][y].explored = true;
  if (board[x][y].value !== '') {
    return;
  }
  showMore(board, x - 1, y - 1);
  showMore(board, x - 1, y);
  showMore(board, x - 1, y + 1);
  showMore(board, x, y - 1);
  showMore(board, x, y + 1);
  showMore(board, x + 1, y - 1);
  showMore(board, x + 1, y);
  showMore(board, x + 1, y + 1);
}

export default rootReducer;