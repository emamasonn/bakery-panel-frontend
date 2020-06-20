import React from 'react';
import { Provider } from 'react-redux';
import Router from './router/index'
import store from './redux/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Router />
      </div>
    </Provider>
  );
}

export default App;
