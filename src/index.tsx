import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App/App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { ErrorMesage } from './components/ErrorMessage/ErrorMesage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store} >
      <ErrorMesage />
      <App />
    </Provider>
  </React.StrictMode>
);
