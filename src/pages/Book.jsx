import React from 'react';
import MetaDecorator from '../components/shared/MetaDecorator/MetaDecorator';
import Booking from '../components/viewProfilePage/Booking';

const Book = ({ match }) => {
  return (
    <div>
      <MetaDecorator title='Healovo | Book' description='Appointment booking' />
      <Booking doctorID={match.params.doctorID} />
    </div>
  );
};

export default Book;
