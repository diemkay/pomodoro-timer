import React from 'react';
import { FiPlayCircle, FiPauseCircle, FiRotateCcw } from 'react-icons/fi';

export const TimerDisplay = ({
  handleReset,
  currentActivity,
  totalAmount,
  convertToTime,
  isActive,
  handleOnOff,
}) => {
  return (
    <div id="timer">
      <div id="timer-label">
        <h2>{currentActivity}</h2>
      </div>
      <div id="time-left">{convertToTime(totalAmount)}</div>
      <div id="timer-controls">
        <div id="start_stop" onClick={handleOnOff}>
          {!isActive ? <FiPlayCircle size="70px" /> : <FiPauseCircle size="70px" />}
        </div>
        <div id="reset" onClick={handleReset}>
          <FiRotateCcw size="70px" alt="Reset Session" />
        </div>
        <audio id="beep" src="./sounds/robotbeep.wav" />
      </div>
    </div>
  );
};
