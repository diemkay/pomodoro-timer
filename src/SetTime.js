import React from 'react';
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';

export const SetTime = ({ timeUnit, label, increment, decrement }) => {
  return (
    <div class="timer-container">
      <div id={label}>{timeUnit} Length</div>
      <FiMinusCircle id={decrement} size="40px" />
      TODO: Default {timeUnit} length
      <FiPlusCircle id={increment} size="40px" />
    </div>
  );
};
