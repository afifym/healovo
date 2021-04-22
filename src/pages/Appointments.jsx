import React from 'react';
import MetaDecorator from '../components/shared/MetaDecorator/MetaDecorator';

const Appointments = ({ match }) => {
  return (
    <div>
      <MetaDecorator
        title='Appointment | Healovo'
        description='An appointment description between a user and a doctor'
      />
      <h2>Appointments</h2>
      <h3>{match.params.appointmentID}</h3>
    </div>
  );
};

export default Appointments;
