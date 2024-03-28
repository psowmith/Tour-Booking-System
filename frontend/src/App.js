import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Welcome from './Welcomepage/Welcome';
import Login from './User/Login/Login';
import Homepage from './User/Home/Homepage';
import Listpage from './User/List/Listpage';
import Booking from './User/Booking/Booking';
import Admin from './Admin/Home/Admin';
//import Home from './Admin/pages/home/Home';
import UserList from './Admin/pages/userList/UserList';
function App() {
  return (
    <div className='App'>
      <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/login" element={<Login />} ></Route>
          <Route path="/homepage" element={<Homepage />} ></Route>
          <Route path="/listpage" element={<Listpage />} ></Route>
          <Route path="/booking" element={<Booking />} ></Route>
          <Route path="/admin/*" element={<Admin />} ></Route>
          <Route path="/users" element={<UserList />} ></Route>
        </Routes>
    </div>
  );
}

export default App;
