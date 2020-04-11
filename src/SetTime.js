import React from 'react';
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';

export const SetTime = ({ length, timerType, handleLengthChange }) => {
  const id = timerType.toLowerCase();

  return (
    <div className="setting-container">
      <div className="setting-description" id={`${id}-label}`}>
        {timerType} Length
      </div>
      <FiMinusCircle
        id={`${id}-decrement`}
        size="35px"
        onClick={() => handleLengthChange(id, -1)}
      />
      <h3> {length}</h3>
      <FiPlusCircle
        id={`${id}-increment`}
        size="35px"
        onClick={() => handleLengthChange(id, 1)}
      />
    </div>
  );
};
