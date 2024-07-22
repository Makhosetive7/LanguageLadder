import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import SpeechProvider from './ContextAPI/SpeechContext';
import { ModalProvider } from './ContextAPI/ModalsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ModalProvider>
    <SpeechProvider>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </SpeechProvider>
  </ModalProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
