import React from 'react';
import { PomodoroView } from './PomodoroView';

export class PomodoroController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      totalAmount: 25 * 60, // Minutes to seconds
      currentActivity: 'Session',
      timer: null,
    };
  }

  // Increase or decrease break or session length
  handleLengthChange = (timerType, amount) => {
    const { breakLength, sessionLength } = this.state;

    let newAmount =
      timerType === 'session' ? sessionLength + amount : breakLength + amount;

    // Disable sessions or breaks of 0 or over 60 minutes
    if (newAmount < 1 || newAmount > 60) {
      return;
    }

    this.setState({
      [`${timerType}Length`]: newAmount,
    });

    // Add more time while current activity is in progress
    if (this.state.currentActivity.toLowerCase() === timerType) {
      this.setState({
        totalAmount: newAmount * 60,
      });
    }
  };

  // Convert seconds to a readable time format, used in TimerDisplay
  convertToTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    document.title = `${minutes}:${seconds}`;

    return `${minutes}:${seconds}`;
  };

  handleOnOff = () => {
    const { timer } = this.state;

    if (timer !== null) {
      clearInterval(timer);

      this.setState({
        timer: null,
      });
    } else {
      const newTimer = setInterval(() => this.handleTick(), 1000);

      this.setState({
        timer: newTimer,
      });
    }
  };

  handleTick = () => {
    const { totalAmount, currentActivity, breakLength, sessionLength } = this.state;

    const audio = document.getElementById('beep');

    if (totalAmount <= 0) {
      this.setState({
        currentActivity: currentActivity === 'Session' ? 'Break' : 'Session',
        totalAmount:
          currentActivity === 'Session' ? breakLength * 60 : sessionLength * 60,
      });

      audio.play();
    } else {
      this.setState({
        totalAmount: totalAmount - 1,
      });
    }
  };

  handleReset = () => {
    const audio = document.getElementById('beep');

    clearInterval(this.state.timer);

    audio.pause();
    audio.currentTime = 0;

    this.setState({
      breakLength: 5,
      sessionLength: 25,
      totalAmount: 25 * 60,
      currentActivity: 'Session',
      timer: null,
    });
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const {
      breakLength,
      sessionLength,
      currentActivity,
      totalAmount,
      timer,
    } = this.state;

    return (
      <PomodoroView
        breakLength={breakLength}
        sessionLength={sessionLength}
        totalAmount={totalAmount}
        isActive={timer !== null}
        currentActivity={currentActivity}
        handleLengthChange={this.handleLengthChange}
        handleReset={this.handleReset}
        handleOnOff={this.handleOnOff}
        convertToTime={this.convertToTime}
      />
    );
  }
}
