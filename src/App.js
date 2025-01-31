import React from 'react'
import HomeComponenet from './Routes/Home/HomeComponenet.jsx';
import { Routes, Route, Outlet } from 'react-router-dom';
import Navigation from './Routes/Navigation/NavigationComponent.jsx';

const Shop = () => {
  return <h2>i am the shop</h2>
};
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>     {/* / is base componenet */}
        <Route path='/home' element={<HomeComponenet />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
