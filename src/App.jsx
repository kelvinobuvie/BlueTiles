import React from 'react'
import "./App.css";
import Login from './Pages/Login';
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';

import Overview from './Pages/Overview/Overview';
import SideBar from './component/SideBar';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login replace/>}/>

        {/* Protected layouts */}
        <Route path='/' element={<ProtectedLayout/>}>
          <Route index element={<Navigate to='login' replace/>}/>
          <Route path='login' element={<Login />} />
          <Route path='overview' element={<Overview/>} />
        </Route>
      </Routes>
    </Router>
  );
};

const ProtectedLayout = () => {
  return(
    <div className='flex'>
    <SideBar/>
    <div className='flex-grow'>
      <Outlet/>
    </div>
  </div>
  )
} 

export default App
