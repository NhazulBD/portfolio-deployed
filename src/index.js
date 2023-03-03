import React from 'react';
import ReactDOM from 'react-dom';
import './styles/reset.css';
import './styles/boots.scss';
import './styles/buttons.scss';
import './styles/margins.css';
import './styles/style.scss';
import './assets/fonts/fonts.css';
import './assets/fonts/fontawesome/css/all.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();