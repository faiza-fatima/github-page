import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import UserInfo from './Routes/UserInfo';
import Users from './Routes/Users';
import UserProfile from './components/UserProfile';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <div className="flex-grow container text-gray-200 py-3">
        <Routes>
          {/* Route for Users component */}
          <Route path="/" element={<Users />} />
          
          {/* Optional: Add route for Users component */}
          <Route path="/users" element={<Users />} />
          
          {/* New route for UserProfile component */}
          <Route path="/user/:username" element={<UserProfile />} />
          
          {/* Route for UserInfo component */}
          <Route path="/:name" element={<UserInfo />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
