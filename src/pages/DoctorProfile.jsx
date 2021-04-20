import React from 'react';
import MetaDecorator from '../utils/MetaDecorator';

const DoctorProfile = () => {
  return (
    <div>
      <MetaDecorator
        title='Doctor Overview'
        description='A profile overview of the doctor'
      />
      <h2>Doctor Profile</h2>
    </div>
  );
};

export default DoctorProfile;
