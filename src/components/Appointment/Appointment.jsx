import React, { useEffect, useState } from 'react';
import { fetchOneAppointment } from '../../utils/firebase';
import styled, { css } from 'styled-components';
import {
  Box,
  CircularProgress,
  LinearProgress,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { fetchOneDoctor, fetchOnePatient } from '../../utils/firebase';

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
`;

const NotLoggedWrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #343949;
  article {
    margin-top: 4em;
    margin-bottom: 2em;
  }
`;
const NotAuthedWrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #343949;
  article {
    margin-top: 4em;
    margin-bottom: 2em;
  }
`;

const user = { id: '-MYlTKlj3FB_gKmSXMDb', type: 'patient' };

const Appointment = ({ id }) => {
  const [appointment, setAppointment] = useState({});
  const [authed, setAuthed] = useState('awaiting');
  const [host, setHost] = useState({ name: '', id: '' });

  //   const authedPatient = true;
  //   const type = 'patient';

  //   const authed = true && ;

  useEffect(() => {
    const fetchHostName = async (type, id) => {
      if (type === 'patient') {
        const data = await fetchOnePatient(id.replace(/\s/g, ''));
        console.log(data);
        setHost(data.name.first + ' ' + data.name.last);
      } else {
        const data = await fetchOneDoctor(id.replace(/\s/g, ''));
        console.log(data);

        setHost(data.name.first + ' ' + data.name.last);
      }
    };

    const fetchData = async () => {
      try {
        setAuthed('awaiting');
        const data = await fetchOneAppointment('-MYlzyNQw-NiC9J8H3qf');
        setAuthed('not-authed');
        console.log(data);

        if (user.type === 'patient') {
          if (user.id === data.patientID.replace(/\s/g, '')) {
            setAuthed(() => 'authed');
            setAppointment(data);
            fetchHostName('doctor', data.doctorID);
          }
        } else {
          if (user.id === data.doctorID.replace(/\s/g, '')) {
            setAuthed(() => 'authed');
            setAppointment(data);
            fetchHostName('patient', data.patientID);
          }
        }
      } catch (error) {
        console.log('Failure: ', error);
      }
    };

    if (!user.id) {
      setAuthed('not-logged');
    } else {
      fetchData();
    }
  }, []);

  if (authed === 'awaiting') {
    return (
      <Box
        style={{ height: '100%' }}
        display='flex'
        alignItems='center'
        justifyContent='center'
      >
        <CircularProgress />
      </Box>
    );
  } else if (authed === 'not-logged') {
    return (
      <NotLoggedWrapper>
        <div>
          <Box
            style={{ height: '100%' }}
            display='flex'
            justifyContent='center'
          >
            <img
              src='/assets/images/healovo.svg'
              alt='healovo'
              style={{ width: '300px' }}
            />
          </Box>
          <article>
            <h2>Error!</h2>
            <h2>Please login to view this appointment</h2>
          </article>

          <Link style={{ color: '#2D50EF' }} to='/signup'>
            Signup {'>>'}
          </Link>
        </div>
      </NotLoggedWrapper>
    );
  } else if (authed === 'not-authed') {
    return (
      <NotAuthedWrapper>
        <div>
          <Box display='flex' justifyContent='center'>
            <img
              src='/assets/images/healovo.svg'
              alt='healovo'
              style={{ width: '300px' }}
            />
          </Box>
          <article>
            <h2>Error!</h2>
            <h2>You're not permitted to view this appointment</h2>
          </article>

          <Link style={{ color: '#2D50EF' }} to='/dashboard'>
            Go to Dashboard... {'>>'}
          </Link>
        </div>
      </NotAuthedWrapper>
    );
  }

  return (
    <Wrapper>
      <Box display='flex' alignItems='center' justifyContent='center'>
        <div style={{ textAlign: 'center' }}>
          <Typography
            variant='subtitle1'
            style={{ fontWeight: '500', opacity: '0.8' }}
            color='secondary'
          >
            Appointment with
          </Typography>
          <Typography
            variant='h4'
            color='primary'
            style={{ fontWeight: '600' }}
          >
            {user.type === 'patient' ? 'Dr. ' : ''} {host}
          </Typography>
        </div>
        <div>
          <Typography variant='h5' color='secondary'>
            Type
          </Typography>
        </div>
      </Box>
    </Wrapper>
  );
};

export default Appointment;
