import React from 'react';
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';

export const Break = () => {
  return (
    <div id="break">
      <div id="break-label">Break Length</div>
      <FiMinusCircle id="break-decrement" size="40px" />
      TODO: Default break length
      <FiPlusCircle id="break-increment" size="40px" />
    </div>
  );
};
