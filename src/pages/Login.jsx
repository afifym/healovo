import React from 'react';
import MetaDecorator from '../components/shared/MetaDecorator/MetaDecorator';
import Signin from '../components/SignIn/Signin';

const Login = () => {
  return (
    <div>
      <MetaDecorator
        title='Healovo | Login'
        description='login page for Healovo website'
      />
      <Signin />
    </div>
  );
};

export default Login;
