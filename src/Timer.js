import React from 'react';
import { FiPlayCircle, FiRotateCcw } from 'react-icons/fi';

export const Timer = () => {
  const setDate = () => {
    const now = new Date();

    const hours = now.getHours();
    const timerHours = document.getElementById('timer-hours');
    timerHours.innerText = `${hours}`;

    const mins = now.getMinutes();
    const timerMinutes = document.getElementById('timer-minutes');
    timerMinutes.innerText = `${mins}`;

    const seconds = now.getSeconds();
    const timerSeconds = document.getElementById('timer-seconds');
    timerSeconds.innerText = `${seconds}`;
  };

  setInterval(setDate, 1000);
  return (
    <div id="timer">
      {/* When a break countdown reaches zero (NOTE: timer MUST reach 00:00), and a new
      countdown begins, the element with the id of timer-label should display a string
      indicating a session has begun. */}
      <div id="timer-label">
        <h2>Session</h2>
      </div>
      <div id="time-left">
        {/* Paused or running, the value in this field should always be displayed in mm:ss 
        format (i.e. 25:00). */}
        <div id="timer-hours"></div>:<div id="timer-minutes"></div>:
        <div id="timer-seconds"></div>
      </div>
      <div id="timer-controls">
        <FiPlayCircle id="start_stop" size="40px" />
        <FiRotateCcw id="reset" size="40px" />
      </div>
    </div>
  );
};
