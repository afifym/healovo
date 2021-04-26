import {
  Box,
  Grid,
  LinearProgress,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import DoctorViewCard from './doctorViewCard/DoctorViewCard';
import TextField from '@material-ui/core/TextField';
import GradientButton from '../shared/GradientButton/GradientButton';
import { FaSearch } from 'react-icons/fa';
import { fetchOneDoctor } from '../../utils/firebase';
import { addAppointment } from '../../utils/firebase';
import { useEffect, useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { useSelector } from 'react-redux';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { Link } from 'react-router-dom';

import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return (
    <MuiAlert
      style={{ margin: '0 1em', width: '400px', transition: 'all 0.2s ease' }}
      variant='filled'
      {...props}
    />
  );
}

const capitalizeString = (str) => {
  return str?.charAt(0).toUpperCase() + str?.slice(1);
};

const initialState = {
  type: 'Clinic',
  date: '',
};

const BookWithDoctor = ({ doctorID }) => {
  const [doctor, setDoctor] = useState({});
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState('zero');

  const [selectedDate, setSelectedDate] = useState(
    new Date('2021-08-18T21:11:54')
  );
  const userId = useSelector((state) => state.userId.id);

  useEffect(() => {
    const getDoctor = async () => {
      try {
        console.log('DOCTORID: ', doctorID);

        const response = await fetchOneDoctor(doctorID);
        console.log('DOCTOR: ', response.data);
        setDoctor(response.data);
      } catch (error) {
        console.log('Fetching doctor failre: ', error);
      }
    };

    getDoctor();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setStatus('loading');
      const response = addAppointment({
        patientID: userId,
        doctorID: doctorID,
        ...formData,
        date: selectedDate.toISOString(),
      });
      setStatus('success');
    } catch (error) {
      setStatus('failure');
    }

    setTimeout(() => {
      setStatus('zero');
    }, 3000);

    setFormData(initialState);
  };

  return (
    <Box
      display='flex'
      justifyContent='center'
      flexDirection='column'
      alignItems='center'
      style={{ height: '100vh', width: '100vw' }}
    >
      <Link to='/'>
        <img
          src='/assets/images/healovo-black.svg'
          alt='healovo'
          style={{ width: '200px' }}
        />
      </Link>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='space-evenly'
          style={{ width: '100vw' }}
        >
          <Typography
            color='primary'
            variant='h4'
            style={{ fontWeight: 600, margin: '2em 0' }}
          >
            {doctor.age && <DoctorViewCard doctor={doctor} />}
            {/* <span style={{ fontWeight: '400', color: '#343949' }}> Dr.</span>{' '}
          {capitalizeString(doctor.name?.first) +
            ' ' +
            capitalizeString(doctor.name?.last)} */}
          </Typography>

          <form onSubmit={handleSubmit}>
            <Box
              display='flex'
              flexDirection='column'
              alignItems='center'
              maxWidth='md'
            >
              <Select
                labelId='city'
                id='select-city'
                value={formData.type}
                onChange={(e) =>
                  setFormData({ ...formData, type: e.target.value })
                }
                style={{ width: '100%' }}
              >
                {['Home', 'Clinic', 'Video'].map((item, i) => (
                  <MenuItem key={i} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant='inline'
                  format='MM-dd-yyyy'
                  margin='normal'
                  id='date-picker-inline'
                  label='Date picker inline'
                  value={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
                <KeyboardTimePicker
                  margin='normal'
                  id='time-picker'
                  label='Time picker'
                  value={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  KeyboardButtonProps={{
                    'aria-label': 'change time',
                  }}
                />
              </MuiPickersUtilsProvider>

              <GradientButton
                type='submit'
                width='210px'
                switchcolors
                icon={<FaSearch color='#hsl(229, 86%, 56%)' size={15} />}
                style={{ marginTop: '2em' }}
              >
                Book Now
              </GradientButton>
              <div style={{ margin: '1em 0', height: '30px', width: '100%' }}>
                {status === 'loading' && <LinearProgress />}
                {status === 'success' && (
                  <Alert severity='success'>Booked Successfuly!</Alert>
                )}
                {status === 'failure' && (
                  <Alert severity='error'>
                    Failure! please try again later
                  </Alert>
                )}
              </div>
            </Box>
          </form>
        </Box>
      </MuiPickersUtilsProvider>
    </Box>
  );
};

export default BookWithDoctor;
