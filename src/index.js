import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './styles.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
const rootElement = document.getElementById('root');

// [Prevent] The redirect of file drop
window.addEventListener('drop', e => e.preventDefault(), true);
// window.addEventListener('dragstart', e => e.preventDefault(), true);
window.addEventListener('dragover', e => e.preventDefault(), true);
// window.addEventListener('dragleave', e => e.preventDefault(), true);
window.addEventListener('beforeunload', e => {
  const msg = 'Please check and backup the change before refresh or leave.';
  return ((e || window.event).returnValue = msg);
});

ReactDOM.render(<App />, rootElement);
serviceWorkerRegistration.register();
