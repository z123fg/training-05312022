/**imports react,
 * reactDOM,
 * index.css
 * App,
 * and reportWebVitals
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/**sets up root variable */
const root = ReactDOM.createRoot(document.getElementById('root'));

/**renders root */
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
