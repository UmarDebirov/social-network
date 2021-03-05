import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import store from './components/redux/redux-store';
import App from './App';
import { Provider } from 'react-redux';




let rerenderEntireTree = (state) => {
debugger
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
       <Provider store={store}>
        <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});


