import React from 'react';
import { PomodoroView } from './PomodoroView';

export class PomodoroController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      totalAmount: 25 * 60,
      currentActivity: 'Session',
    };
  }

  handleLengthChange = (timerType, amount) => {
    const { breakLength, sessionLength } = this.state;

    let newAmount =
      timerType === 'session' ? sessionLength + amount : breakLength + amount;

    if (newAmount < 1 || newAmount > 60) {
      return;
    }

    // FAST RETURN!!!!
    this.setState({
      [`${timerType}Length`]: newAmount,
    });

    if (this.state.currentActivity.toLowerCase() === timerType) {
      this.setState({
        totalAmount: newAmount * 60,
      });
    }
  };

  convertToTime = (totalTime) => {
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${minutes}:${seconds}`;
  };

  // TODO: Count down from value
  handleOnOff = () => {};

  // TODO:fill out rest
  handleReset = () => {
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      isActive: false,
      totalAmount: 25 * 60,
    });
  };

  render() {
    const {
      breakLength,
      sessionLength,
      currentActivity,
      totalAmount,
      isActive,
    } = this.state;

    return (
      <PomodoroView
        breakLength={breakLength}
        sessionLength={sessionLength}
        totalAmount={totalAmount}
        isActive={isActive}
        currentActivity={currentActivity}
        handleLengthChange={this.handleLengthChange}
        handleReset={this.handleReset}
        handleOnOff={this.handleOnOff}
        convertToTime={this.convertToTime}
      />
    );
  }
}
