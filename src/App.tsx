import React, { useState } from 'react';
import './App.css';
import { LoadingScreen } from './components/LoadingScreen';
import { Dashboard } from './components/Dashboard';
import { Globe } from './components/Globe';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  return (
    <>
      { loading ? <LoadingScreen /> : <Dashboard /> }
      <Globe setLoading={setLoading} />    
    </>
  );
}

export default App;
