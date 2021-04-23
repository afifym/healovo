import React from 'react';
import MetaDecorator from '../components/shared/MetaDecorator/MetaDecorator';

const PatientProfile = ({ match }) => {
  return (
    <div>
      <MetaDecorator
        title='Profile | Healovo'
        description='A profile page for a user'
      />
      <h2>Patient Profile</h2>
      <h3>{match.params.patientID}</h3>
    </div>
  );
};

export default PatientProfile;
