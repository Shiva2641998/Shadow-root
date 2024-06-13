import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import ReactDOM from 'react-dom';

const container = document.getElementById('root');
const root = createRoot(container);

class ShadowRootContainer extends HTMLElement {
  constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
      ReactDOM.render(<React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>, this.shadowRoot);
  }
}

customElements.define('shadow-root-container', ShadowRootContainer);

// document.body.appendChild(document.createElement('shadow-root-container'));


// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
