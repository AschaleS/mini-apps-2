import React from 'react';

const ScoreCard = (props) => {
  if (props.score.frame2 === 2) {
    return (
      <div>
        <br/><div># of Pins Hit: {props.score.firstBowl}</div>
        <div>Frame: {props.score.frame}</div>
        <div>Total Score: {props.score.score}</div>
      </div>
    )
  } else {
    return (
      <div>
        <br/><div># of Pins Hit: {props.score.secondBowl}</div>
        <div>Frame: {props.score.frame}</div>
        <div>Total Score: {props.score.score}</div>
      </div>
    )
  }
}

export default ScoreCard;
