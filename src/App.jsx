import React from 'react';
import './index.css'
import User from './components/User';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
const App = () => {
  return (
    
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path="user/:username" element={<User />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
