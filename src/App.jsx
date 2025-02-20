
import { useState } from "react";
import {Routes, Route} from 'react-router-dom'
import FirstLogin from './pages/FirstLogin'
import CreateNewWallet from './pages/CreateNewWallet'
import Home from './pages/Home'
import CreatePassword from './pages/CreatePassword'
import Discovery from './pages/Discovery'
import History from './pages/History'
import Login from './pages/Login'
import Portfolio from './pages/Portfolio'
import Receiving from './pages/Receiving'
import Research from './pages/Research'
import Revoke from './pages/Revoke'
import Sending from './pages/Sending'
import Swap from './pages/Swap'
import ImportWallet from './pages/ImportWallet'
import CreateWith12Word from './pages/CreateWith12Word'
import CreateWith24Word from './pages/CreateWith24Word'
import Account from './pages/Account'




function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<FirstLogin/>} exact />
        <Route path='/createwallet' element={<CreateNewWallet/>} exact/>
        <Route path='/home' element={<Home/>} exact />
        <Route path='/home/send' element={<Sending/>} exact />
        <Route path='/createpassword' element={<CreatePassword />} exact />
        <Route path='/discovery' element={<Discovery />}exact />
        <Route path='/history' element={<History/>} exact />
        <Route path='/login' element={<Login/>} exact />
        <Route path='/portfolio' element={<Portfolio/>} exact />
        <Route path='/home/Receiving' element={<Receiving/>} exact />
        <Route path='/research' element={<Research/>} exact />
        <Route path='/revoke' element={<Revoke/>} exact />
        <Route path='/sending' element={<Sending/>} exact/>
        <Route path='/swap' element={<Swap/>} exact />
        <Route path='/importwallet' element={<ImportWallet/>} exact />
        <Route path='/createwallet/createwith12' element={<CreateWith12Word/>} exact />
        <Route path='/createwallet/createwith24' element={<CreateWith24Word/>} exact />
        <Route path='/createwallet/createwith12/importwallet' element={<ImportWallet />} exact />
        <Route path='/createwallet/createwith24/importwallet' element={<ImportWallet />} exact />
        <Route path='/CreatePassword/createwallet' element={<Login/>} exact />
        <Route path='/account' element={<Account/>} exact/>
      </Routes>
    </div>
  );
};

export default App;