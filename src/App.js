import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User';
import UserDetails from './pages/User/UserDetails';
import MyNavLink from './utils/MyNavLink';
import Message from './pages/Home/Message';
import News from './pages/Home/News';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <MyNavLink to="/">Home</MyNavLink>
          </li>
          <li>
            <MyNavLink to="/user/1">User 1</MyNavLink>
          </li>
          <li>
            <MyNavLink to="/user/2">User 2</MyNavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="news/:id" element={<News />} />
          <Route path="message" element={<Message />} />
        </Route>
        <Route path="/user/:id" element={<User />}>
          <Route path="userDetails" element={<UserDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
