import React from "react";
import {Routes, Route} from 'react-router-dom'
import FirstLogin from './pages/FirstLogin';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<FirstLogin/>} />
      </Routes>
    </div>
  );
};

export default App;