import React from 'react';
import MetaDecorator from '../components/shared/MetaDecorator/MetaDecorator';
import Registeration from '../components/Registeration/Registeration';

const Signup = () => {
  return (
    <div>
      <MetaDecorator
        title='Healovo | Signup'
        description='Signup page for Healovo'
      />
      <Registeration />
    </div>
  );
};

export default Signup;
