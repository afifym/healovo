import React, { useEffect, useState } from 'react';
import { fetchOneAppointment } from '../../utils/firebase';
import styled, { css } from 'styled-components';
import {
  Box,
  CircularProgress,
  Divider,
  LinearProgress,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { fetchOneDoctor, fetchOnePatient } from '../../utils/firebase';
import GradientButton from '../shared/GradientButton/GradientButton';
import { FaVideo, FaClinicMedical, FaHome } from 'react-icons/fa';

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

const dateDiffInDays = (date1, date2) => {
  var Difference_In_Time = date2 - date1.getTime();
  return parseInt(Difference_In_Time / (1000 * 3600 * 24));
};

const capitalizeString = (str) => {
  return str?.charAt(0).toUpperCase() + str?.slice(1);
};

function tConvert(time) {
  time = time.match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

  if (time.length > 1) {
    time = time.slice(1); // Remove full string match value
    time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }
  console.log(time);

  return time.join(''); // return adjusted time or original string
}

const Appointment = ({ id }) => {
  const [appointment, setAppointment] = useState({});
  const [authed, setAuthed] = useState('awaiting');
  const [host, setHost] = useState({});

  useEffect(() => {
    const fetchHost = async (type, id) => {
      if (type === 'patient') {
        const data = await fetchOnePatient(id.replace(/\s/g, ''));
        setHost(data);
      } else {
        const data = await fetchOneDoctor(id.replace(/\s/g, ''));
        setHost(data);
      }
    };

    const fetchData = async () => {
      try {
        setAuthed('awaiting');
        const data = await fetchOneAppointment('-MYv7JIwmPZL3FDx_w0L');
        setAuthed('not-authed');

        if (user.type === 'patient') {
          if (user.id === data.patientID.replace(/\s/g, '')) {
            setAuthed(() => 'authed');
            setAppointment(data);
            fetchHost('doctor', data.doctorID);
          }
        } else {
          if (user.id === data.doctorID.replace(/\s/g, '')) {
            setAuthed(() => 'authed');
            setAppointment(data);
            fetchHost('patient', data.patientID);
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
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        style={{ height: '100vh' }}
      >
        <Box
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          style={{ width: '350px' }}
        >
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
              {user.type === 'patient' ? 'Dr. ' : ''}{' '}
              {host.name?.first + ' ' + host.name?.last}
            </Typography>
            <Divider />
          </div>
          <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='space-between'
            my={5}
            style={{ width: '100%' }}
          >
            <Typography
              variant='h5'
              color='secondary'
              style={{ fontWeight: '600', width: '100%' }}
            >
              <Box display='flex' justifyContent='space-between'>
                <div
                  style={{
                    fontWeight: '400',
                    opacity: '0.7',
                    width: '40%',
                    textAlign: 'right',
                  }}
                >
                  Type
                </div>
                <div style={{ width: '40%' }}>
                  {capitalizeString(appointment.type) || 'Video'}
                </div>
              </Box>
            </Typography>
            <Typography
              variant='h5'
              color='secondary'
              style={{ fontWeight: '600', width: '100%' }}
            >
              <Box display='flex' justifyContent='space-between'>
                <div
                  style={{
                    fontWeight: '400',
                    opacity: '0.7',
                    width: '40%',
                    textAlign: 'right',
                  }}
                >
                  Date
                </div>
                <div style={{ width: '40%' }}>
                  {appointment.date?.split('T')[0]}
                </div>
              </Box>
              <Box display='flex' justifyContent='space-between'>
                <div
                  style={{
                    fontWeight: '400',
                    opacity: '0.7',
                    width: '40%',
                    textAlign: 'right',
                  }}
                >
                  Time
                </div>
                <div style={{ width: '40%' }}>
                  {appointment.date &&
                    new Date(appointment.date).toLocaleTimeString()}
                </div>
              </Box>
              <Box display='flex' justifyContent='space-between'>
                <div
                  style={{
                    fontWeight: '400',
                    opacity: '0.7',
                    width: '40%',
                    textAlign: 'right',
                  }}
                >
                  Remaining
                </div>
                <div style={{ width: '40%' }}>
                  {dateDiffInDays(new Date(), Date.parse(appointment.date))}{' '}
                  days
                </div>
              </Box>
            </Typography>
          </Box>
          {appointment.type === '' && host.type === 'doctor' && (
            <GradientButton icon={<FaVideo color='white' size={13} />}>
              Join Video
            </GradientButton>
          )}
          {appointment.type === 'video' && host.type === 'patient' && (
            <GradientButton icon={<FaVideo color='white' size={13} />}>
              Start Video
            </GradientButton>
          )}
          {appointment.type === 'clinic' && host.type === 'doctor' && (
            <GradientButton icon={<FaClinicMedical color='white' size={13} />}>
              Clinic Location
            </GradientButton>
          )}
          {appointment.type === 'home' && host.type === 'patient' && (
            <GradientButton icon={<FaHome color='white' size={13} />}>
              Patient Location
            </GradientButton>
          )}
        </Box>
      </Box>
    </Wrapper>
  );
};

export default Appointment;

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
`;
