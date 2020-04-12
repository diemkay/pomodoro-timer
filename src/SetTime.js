import React from 'react';
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';

export const SetTime = ({ length, timerType, handleLengthChange }) => {
  const id = timerType.toLowerCase();

  return (
    <div className="setting-container">
      <div className="setting-description" id={`${id}-label`}>
        {timerType} Length
      </div>
      <div
        className="fa-icon"
        id={`${id}-decrement`}
        onClick={() => handleLengthChange(id, -1)}
      >
        <FiMinusCircle size="35px" />
      </div>
      <div className="setting-length">
        <h3 id={`${id}-length`}>{length}</h3>
      </div>
      <div
        className="fa-icon"
        id={`${id}-increment`}
        onClick={() => handleLengthChange(id, 1)}
      >
        <FiPlusCircle size="35px" />
      </div>
    </div>
  );
};
