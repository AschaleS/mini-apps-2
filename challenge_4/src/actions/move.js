export const MOVE = 'MOVE';

var move = (x,y) => ({
  type: MOVE,
  payload: {
    x: x,
    y: y,
  }
});

export default move;