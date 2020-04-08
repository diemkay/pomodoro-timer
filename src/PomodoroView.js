import React from 'react';
import { Footer } from './Footer';

import { Timer } from './Timer';
import { SetTime } from './SetTime';

export const PomodoroView = () => (
  <React.Fragment>
    <h1>Hello Tomato</h1>
    <SetTime
      timeUnit={'Break'}
      label={'break-label'}
      increment={'break-increment'}
      decrement={'break-decrement'}
    />
    <SetTime
      timeUnit={'Session'}
      label={'session-label'}
      increment={'session-increment'}
      decrement={'session-decrement'}
    />
    <Timer />
    <Footer />
  </React.Fragment>
);
