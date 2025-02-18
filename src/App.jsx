
import { useState } from "react";
import {Routes, Route} from 'react-router-dom'
import FirstLogin from './pages/FirstLogin'
import CreateNewWallet from './pages/createNewWallet'
import Home from './pages/Home'
import ImportWallet from './pages/ImportWallet'


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<FirstLogin/>} />
        <Route path='createwallet' element={<CreateNewWallet/>} />
        <Route path='home' element={<Home/>} />
        <Route path='importwallet' element={<ImportWallet/>} />

      </Routes>
    </div>
  );
};

export default App;