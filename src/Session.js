import React from 'react';
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';

export const Session = () => {
  return (
    <div id="session">
      {/* session-label must contain "Session Length" and nothing else */}
      <div id="session-label">Session Length</div>
      <FiMinusCircle id="session-decrement" size="40px" />
      TODO: Default session length
      <FiPlusCircle id="session-increment" size="40px" />
    </div>
  );
};
