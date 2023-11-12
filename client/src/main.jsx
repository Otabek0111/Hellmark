import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Use BrowserRouter for client-side routing

import App from './App.jsx';
import './index.css';
import '../src/style.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <BrowserRouter> {/* Wrap App in BrowserRouter */}
    <App />
  </BrowserRouter>
);
