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
      <div id="time-left">
        <div id="session-length">{convertToTime(totalAmount)}</div>
      </div>
      <div id="timer-controls">
        {!isActive ? (
          <FiPlayCircle id="start_stop" size="70px" onClick={handleOnOff} />
        ) : (
          <FiPauseCircle id="start_stop" size="70px" onClick={handleOnOff} />
        )}

        <FiRotateCcw id="reset" size="70px" alt="Reset Session" onClick={handleReset} />
      </div>
    </div>
  );
};
