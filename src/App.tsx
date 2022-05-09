import React from 'react';
import './App.css';
import { LoadingScreen } from './components/LoadingScreen';
import { Dashboard } from './components/Dashboard';
import { Scene } from './components/Scene';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { allReducers } from './store/reducers';

function App() {
  const store = createStore(allReducers);
  return (
    <Provider store={store}>
      <LoadingScreen />
      <Dashboard />
      <Scene />    
    </Provider>
  );
}

export default App;
