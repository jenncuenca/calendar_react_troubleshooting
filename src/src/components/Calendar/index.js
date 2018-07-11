import React from 'react';
import ReactDOM from 'react-dom';
import './Calendar.css';
import CalendarPage from './Calendar';
import registerServiceWorker from '../registerServiceWorker';

ReactDOM.render(<CalendarPage />, document.getElementById('root'));
registerServiceWorker();