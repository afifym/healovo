import {
  Box,
  Button,
  Divider,
  TextField,
  Typography,
  LinearProgress,
  Paper,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import FormControl from '@material-ui/core/FormControl';
import { useState } from 'react';
import { addDoctor, updateDoctor } from '../../../../utils/firebase';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import styled, { css } from 'styled-components';

import Input from '@material-ui/core/Input';
import Chip from '@material-ui/core/Chip';
import firebase from '../../../../utils/firebase';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Wrapper = styled.div`
  padding: 1em;

  ${({ update }) =>
    update &&
    css`
      border: 2px solid ${({ theme }) => theme.colors.main1};
    `};
`;

function Alert(props) {
  return (
    <MuiAlert
      style={{ margin: '0 1em', width: '400px', transition: 'all 0.2s ease' }}
      variant='filled'
      {...props}
    />
  );
}

const initialState = {
  name: { first: '', last: '' },
  degree: '',
  specialty: '',
  rate: '',
  age: '',
  price: '',
  image: '',
  email: '',
  password: '',
  gender: '',
  phone: [],
  location: '',
  reservationDates: [],
};

const reservationDatesInitialState = {
  day: '',
  period: '',
};

const phoneInitialState = '';

const AddUser = ({ fetch, setFetch, update, selected }) => {
  const [status, setStatus] = useState('none');
  const [formData, setFormData] = useState(initialState);
  const [reservation, setReservation] = useState(reservationDatesInitialState);
  const [phoneData, setPhoneData] = useState(phoneInitialState);
  const [methods, setMethods] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('awaiting');

    try {
      if (update) {
        const updateData = {};
        for (const key in formData) {
          if (!!formData[key] && formData[key] != {} && formData[key] != [])
            updateData[key] = formData[key];
        }

        selected.forEach(async (id) => {
          const response = await updateDoctor(id, updateData);
          const data = response.data;
        });
      } else {
        const commMethods = { home: false, clinic: false, video: false };
        methods.forEach((method) => {
          commMethods[method] = true;
        });
        const response = await addDoctor({
          ...formData,
          joinDate: new Date().toISOString().slice(0, 10),
          type: 'doctor',
          communicationMethods: commMethods,
        });
        const data = response.data;
      }

      setStatus('success');
    } catch (error) {
      setStatus('failure');
    }

    setTimeout(() => {
      setStatus('');
    }, 3000);

    setFormData(initialState);
    setReservation(reservationDatesInitialState);
    setPhoneData(phoneInitialState);
    setFetch(!fetch);
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    const fileURL = await fileRef.getDownloadURL();
    setFormData({ ...formData, image: fileURL });
  };

  return (
    <Box display='flex' flexDirection='column' m='auto' maxWidth={1100}>
      <Paper>
        <Wrapper update={update}>
          <form onSubmit={handleSubmit}>
            <Typography
              variant='h5'
              color='primary'
              style={{ margin: '0.2em 1em', fontWeight: '700' }}
            >
              {update ? 'UPDATE DOCTORS' : 'ADD DOCTORS'}
            </Typography>
            <Divider />

            <Box display='flex' m={1} p={1} border={1} borderRadius={16}>
              <Typography
                variant='h6'
                color='secondary'
                style={{ margin: '0 0.5em', width: '250px' }}
              >
                Basic Info
              </Typography>
              <div>
                <TextField
                  required
                  id='first-name'
                  label='First Name'
                  style={{ margin: 8 }}
                  placeholder='First name'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant='outlined'
                  value={formData.name.first}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: { ...formData.name, first: e.target.value },
                    })
                  }
                />
                <TextField
                  required
                  id='last-name'
                  label='Last Name'
                  style={{ margin: 8 }}
                  placeholder='Last name'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant='outlined'
                  value={formData.name.last}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: { ...formData.name, last: e.target.value },
                    })
                  }
                />
                <TextField
                  id='degree'
                  label='Degree'
                  style={{ margin: 8 }}
                  placeholder='Degree'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant='outlined'
                  value={formData.degree}
                  onChange={(e) =>
                    setFormData({ ...formData, degree: e.target.value })
                  }
                />
                <TextField
                  id='specialty'
                  label='Specialty'
                  style={{ margin: 8 }}
                  placeholder='Specialty'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant='outlined'
                  value={formData.specialty}
                  onChange={(e) =>
                    setFormData({ ...formData, specialty: e.target.value })
                  }
                />

                <TextField
                  id='rate'
                  label='Rate'
                  style={{ margin: 8 }}
                  placeholder='Rate'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant='outlined'
                  value={formData.rate}
                  onChange={(e) =>
                    setFormData({ ...formData, rate: e.target.value })
                  }
                />
                <TextField
                  required
                  type='number'
                  id='age'
                  label='age'
                  style={{ margin: 8 }}
                  placeholder='Age'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant='outlined'
                  value={formData.age}
                  onChange={(e) =>
                    setFormData({ ...formData, age: e.target.value })
                  }
                />
                <TextField
                  type='number'
                  id='price'
                  label='Price'
                  style={{ margin: 8 }}
                  placeholder='Price'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant='outlined'
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                />
                <TextField
                  required
                  type='email'
                  id='email'
                  label='Email'
                  style={{ margin: 8 }}
                  placeholder='Email'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant='outlined'
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <TextField
                  id='password'
                  label='Password'
                  style={{ margin: 8 }}
                  placeholder='Password'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant='outlined'
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <div>
                  <span
                    style={{
                      fontWeight: 'bold',
                      color: '#343949',
                    }}
                  >
                    Image
                  </span>
                  <input
                    type='file'
                    id='image'
                    label='Image URL'
                    style={{ margin: 8 }}
                    placeholder='image'
                    accept='image/jpg'
                    onChange={handleImageUpload}
                  />
                </div>

                <TextField
                  id='address'
                  label='Location'
                  style={{ margin: 8 }}
                  placeholder='location'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant='outlined'
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                />
                <TextField
                  id='overview'
                  label='Overview'
                  style={{ margin: 8 }}
                  placeholder='Overview'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant='outlined'
                  multiline
                  value={formData.overview}
                  onChange={(e) =>
                    setFormData({ ...formData, overview: e.target.value })
                  }
                />
                <FormControl style={{ minWidth: '100px' }}>
                  <InputLabel id='gender' style={{ margin: '0.2em' }}>
                    Gender
                  </InputLabel>
                  <Select
                    required
                    style={{ padding: '0.2em' }}
                    variant='filled'
                    labelId='gender'
                    id='gender'
                    value={formData.gender}
                    onChange={(e) =>
                      setFormData({ ...formData, gender: e.target.value })
                    }
                  >
                    <MenuItem value='male'>Male</MenuItem>
                    <MenuItem value='female'>Female</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </Box>
            <Box border={1} m={1} borderRadius={16} p={1}>
              <Box display='flex'>
                <Typography
                  variant='h6'
                  color='secondary'
                  style={{ margin: '0 0.5em', width: '120px' }}
                >
                  Phone
                </Typography>
                <div>
                  <TextField
                    id='phone'
                    label='Phone'
                    style={{ margin: 8 }}
                    placeholder='Phone'
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant='outlined'
                    value={phoneData}
                    onChange={(e) => setPhoneData(e.target.value)}
                  />
                </div>
              </Box>
              <Box my={1}>
                <Button
                  type='button'
                  color='secondary'
                  variant='contained'
                  onClick={() => {
                    setFormData({
                      ...formData,
                      phone: [...formData.phone, phoneData],
                    });
                    setPhoneData(phoneInitialState);
                  }}
                >
                  Add Phone
                </Button>
                {formData.phone.map((p, i) => (
                  <Alert key={i} severity='info' style={{ margin: '0.5em 0' }}>
                    {p}
                  </Alert>
                ))}
              </Box>
            </Box>
            <Box
              display='flex'
              alignItems='center'
              justifyContent='space-between'
              border={1}
              m={1}
              borderRadius={16}
              p={1}
            >
              <Typography
                variant='h6'
                color='secondary'
                style={{ margin: '0 0.5em', width: '250px' }}
              >
                Communiction Methods
              </Typography>
              <div className='' style={{ width: '60%' }}>
                <FormControl style={{ width: '100%' }}>
                  <InputLabel id='comm-methods'>
                    Communication Methods
                  </InputLabel>
                  <Select
                    labelId='comm-methods'
                    id='comm-methods-select'
                    multiple
                    value={methods}
                    onChange={(e) => setMethods(e.target.value)}
                    input={<Input id='select-multiple-chip' />}
                    renderValue={(selected) => (
                      <div>
                        {selected.map((value) => (
                          <Chip key={value} label={value} />
                        ))}
                      </div>
                    )}
                    MenuProps={MenuProps}
                  >
                    {['clinic', 'home', 'video'].map((type) => (
                      <MenuItem
                        key={type}
                        value={type}
                        // style={getStyles(type, personName, theme)}
                      >
                        {type}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </Box>
            <Box border={1} borderRadius={16} p={1} m={1}>
              <Box display='flex' m={2}>
                <Typography
                  variant='h6'
                  color='secondary'
                  style={{ margin: '0 1em' }}
                >
                  Reservation Dates
                </Typography>
                <div>
                  <TextField
                    id='reservationDay'
                    label='Day'
                    style={{ margin: 8 }}
                    placeholder='Day'
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant='outlined'
                    value={reservation.day}
                    onChange={(e) =>
                      setReservation({
                        ...reservation,
                        day: e.target.value,
                      })
                    }
                  />
                  <TextField
                    id='reservationPeriod'
                    label='Period'
                    style={{ margin: 8 }}
                    placeholder='Period'
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant='outlined'
                    value={reservation.period}
                    onChange={(e) =>
                      setReservation({
                        ...reservation,
                        period: e.target.value,
                      })
                    }
                  />
                </div>
              </Box>
              <Box my={1}>
                <Button
                  type='button'
                  color='secondary'
                  variant='contained'
                  onClick={() => {
                    setFormData({
                      ...formData,
                      reservationDates: [
                        ...formData.reservationDates,
                        reservation,
                      ],
                    });
                    setReservation(reservationDatesInitialState);
                  }}
                >
                  Add Reservation
                </Button>
                {formData.reservationDates.map((m, i) => (
                  <Alert key={i} severity='info' style={{ margin: '0.5em 0' }}>
                    {m.day}, {m.period}
                  </Alert>
                ))}
              </Box>
            </Box>

            <Box display='flex'>
              <Button
                disabled={status === 'awaiting'}
                type='submit'
                variant='contained'
                color='primary'
                size='large'
              >
                {update ? 'Update Doctor' : 'Add Doctor'}
              </Button>
              {status === 'success' && (
                <Alert severity='success'>Success!</Alert>
              )}
              {status === 'error' && <Alert severity='error'>Failure!</Alert>}
              {status === 'awaiting' && (
                <Alert severity='info'>Awaiting Response!</Alert>
              )}
            </Box>
          </form>
          {status === 'awaiting' && (
            <LinearProgress style={{ margin: '1em 0' }} />
          )}
        </Wrapper>
      </Paper>
    </Box>
  );
};

export default AddUser;
