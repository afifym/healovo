import React from 'react';
import MetaDecorator from '../components/shared/MetaDecorator/MetaDecorator';
import BookWithDoctor from '../components/viewProfilePage/BookWithDoctor';

const DoctorProfile = ({ match }) => {
  return (
    <div>
      <MetaDecorator
        title='Doctor Overview'
        description='A profile overview of the doctor'
      />
      <BookWithDoctor doctorID={match.params.doctorID} />
    </div>
  );
};

export default DoctorProfile;
