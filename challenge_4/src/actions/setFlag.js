export const SETFLAG = 'SETFLAG';

var setFlag = (x,y) => ({
  type: SETFLAG,
  payload: {
    x: x,
    y: y,
  }
});

export default setFlag;