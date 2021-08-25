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
import VerifyOTP from './components/VerifyOTP/VerifyOTP';

export const UserContext = createContext();
function App() {
  const [userInfo, setUserInfo] = useState({
    phone: '',
    otp: '',
    type: ''
  })
  return (
    <UserContext.Provider value={[userInfo, setUserInfo]}>
      <Router>
        <Switch>
          <Route path="/get-otp">
            <GetPhoneNumber />
          </Route>
          <Route path="/verify-otp">
            <VerifyOTP />
          </Route>
          <Route exact path="/">
            <GetPhoneNumber />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
