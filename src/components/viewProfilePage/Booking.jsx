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

const capitalizeString = (str) => {
  return str?.charAt(0).toUpperCase() + str?.slice(1);
};

const initialState = {
  type: 'Clinic',
  date: '',
};

const Booking = ({ doctorID }) => {
  const [doctor, setDoctor] = useState({});
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
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
    setLoading(true);

    try {
      const response = addAppointment({
        patientID: userId,
        doctorID: doctorID,
        ...formData,
        date: selectedDate.toISOString(),
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }

    setFormData(initialState);
  };

  return (
    <Box
      display='flex'
      justifyContent='center'
      flexDirection='column'
      alignItems='center'
      style={{ height: '100vh' }}
    >
      <Link to='/'>
        <img
          src='/assets/images/healovo-black.svg'
          alt='healovo'
          style={{ width: '200px' }}
        />
      </Link>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Typography
          color='primary'
          variant='h4'
          style={{ fontWeight: 600, margin: '2em 0' }}
        >
          {/* {doctor?.id && <DoctorViewCard doctor={doctor} />} */}
          <span style={{ fontWeight: '400', color: '#343949' }}> Dr.</span>{' '}
          {capitalizeString(doctor.name?.first) +
            ' ' +
            capitalizeString(doctor.name?.last)}
        </Typography>

        <form onSubmit={handleSubmit}>
          <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            maxWidth='md'
          >
            {loading && <LinearProgress />}

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
            </MuiPickersUtilsProvider>
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
            <GradientButton
              type='submit'
              width='210px'
              switchcolors
              icon={<FaSearch color='#hsl(229, 86%, 56%)' size={15} />}
              style={{ marginTop: '2em' }}
            >
              Book Now
            </GradientButton>
          </Box>
        </form>
      </MuiPickersUtilsProvider>
    </Box>
  );
};

export default Booking;
