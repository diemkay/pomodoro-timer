import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { PomodoroView } from './PomodoroView';

const App = () => <PomodoroView />;

ReactDOM.render(<App />, document.getElementById('root'));
