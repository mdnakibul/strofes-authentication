import React, { createContext, useState } from 'react';
import './App.css';
// importing react router components 
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// importing other components 
import GetPhoneNumber from './components/GetPhoneNumber/GetPhoneNumber';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import UserProfile from './components/UserProfile/UserProfile';

export const UserContext = createContext();
function App() {
  const [userInfo, setUserInfo] = useState({})
  return (
    <UserContext.Provider value={[userInfo, setUserInfo]}>
      <Router>
        <Switch>
        <Route exact path="/">
            <GetPhoneNumber />
          </Route>
          <Route path="/get-otp">
            <GetPhoneNumber />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/user-profile">
            <UserProfile />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
