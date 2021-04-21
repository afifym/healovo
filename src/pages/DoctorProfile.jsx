import React from 'react';
import MetaDecorator from '../components/shared/MetaDecorator/MetaDecorator';

const DoctorProfile = ({ match }) => {
  return (
    <div>
      <MetaDecorator
        title='Doctor Overview'
        description='A profile overview of the doctor'
      />
      <h2>Doctor Profile</h2>
      <h3>{match.params.doctorID}</h3>
    </div>
  );
};

export default DoctorProfile;
