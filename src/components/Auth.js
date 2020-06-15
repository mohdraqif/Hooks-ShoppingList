import React, { useContext } from 'react';

import Card from './UI/Card';
import { AuthContext } from '../context/auth-context';
import './Auth.css';

const Auth = props => {
  const authContext = useContext(AuthContext);

  const loginHandler = () => {
    authContext.login();
  };

  return (
    <div className="auth">
      <Card>
        <h2>Welcome to The Shopping List</h2>
        <p>We help you remember what to buy.</p>
        <button onClick={loginHandler}>Make Your List</button>
      </Card>
    </div>
  );
};

export default Auth;
