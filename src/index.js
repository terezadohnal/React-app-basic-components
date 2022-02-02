import ReactDOM from 'react-dom';

import './index.css';
import App from './App'; // komponenta z App.js, nepiseme ./App.js, pouze ./App

ReactDOM.render(<App />, document.getElementById('root')); // nahrazujeme misto v index.html s id root s App
// delame to pouze jedenkrat pro nasi root komponentu