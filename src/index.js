import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './styles.css';
import App from './App';
const rootElement = document.getElementById('root');

// [Prevent] The redirect of file drop
window.addEventListener('drop', e => e.preventDefault(), true);
// window.addEventListener('dragstart', e => e.preventDefault(), true);
window.addEventListener('dragover', e => e.preventDefault(), true);
// window.addEventListener('dragleave', e => e.preventDefault(), true);

ReactDOM.render(<App />, rootElement);
