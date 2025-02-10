import React from 'react'
import HomeComponenet from './Routes/Home/HomeComponenet.jsx';
import { Routes, Route} from 'react-router-dom';
import Navigation from './Routes/Navigation/NavigationComponent.jsx';
import SigninComponent from './Routes/Sign-in/SigninComponent.jsx';

const Shop = () => {
  return <h2>i am the shop</h2>
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>     {/* / is base componenet */}
        <Route path='/home' element={<HomeComponenet />} />
        <Route path='shop' element={<Shop />} />
        <Route path='signin' element={<SigninComponent/>}/>
      </Route>
    </Routes>
  );
};
export default App;
