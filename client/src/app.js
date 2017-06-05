import React from 'react';
import ReactDOM from 'react-dom';

import FilmListContainer from './components/FilmListContainer.jsx'

window.addEventListener('load', () => {
  const targetDiv = document.getElementById('app');

  ReactDOM.render(<FilmListContainer />, targetDiv);
});
