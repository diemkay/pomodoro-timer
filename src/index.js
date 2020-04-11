import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { PomodoroController } from './PomodoroController';

const App = () => <PomodoroController />;

ReactDOM.render(<App />, document.getElementById('root'));
