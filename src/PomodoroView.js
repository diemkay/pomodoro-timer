import React from 'react';
import { Footer } from './Footer';
import { Break } from './Break';
import { Session } from './Session';
import { Timer } from './Timer';

export const PomodoroView = () => (
  <React.Fragment>
    <h1>Hello Tomato</h1>
    <Break />
    <Session />
    <Timer />
    <Footer />
  </React.Fragment>
);
