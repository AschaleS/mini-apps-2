export const NEWGAME = 'NEWGAME';

var playAgain = (board) => ({
  type: NEWGAME,
  payload: board,
});

export default playAgain;