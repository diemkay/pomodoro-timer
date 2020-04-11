import React from 'react';
import { SetTime } from './SetTime';
import { TimerDisplay } from './TimerDisplay';
import { Footer } from './Footer';

export const PomodoroView = ({
  breakLength,
  sessionLength,
  handleLengthChange,
  handleReset,
  currentActivity,
  convertToTime,
  totalAmount,
  isActive,
}) => (
  <React.Fragment>
    <h1>Hello Tomato</h1>
    <SetTime
      length={breakLength}
      timerType={'Break'}
      handleLengthChange={handleLengthChange}
    />
    <SetTime
      length={sessionLength}
      timerType={'Session'}
      handleLengthChange={handleLengthChange}
    />
    <TimerDisplay
      handleReset={handleReset}
      currentActivity={currentActivity}
      convertToTime={convertToTime}
      totalAmount={totalAmount}
      isActive={isActive}
    />
    <Footer />
  </React.Fragment>
);
