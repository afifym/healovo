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

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { useEffect, useState } from 'react';
import { addPatient } from '../../../../utils/firebase';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import {
  deleteDoctor,
  deletePatient,
  fetchPatients,
  fetchDoctors,
  jsonToArray,
} from '../../../../utils/firebase';

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
  firstName: '',
  lastName: '',
  age: '',
  phone: '+20',
  email: '',
  password: '',
  image: '',
  gender: '',
  vitals: {
    height: '',
    weight: '',
    massIndex: '',
    fat: '',
    bbi: '',
  },
  medications: [],
};

const medicationInitialState = {
  name: '',
  type: '',
  duration: '',
};

const AddUser = ({ fetch, setFetch }) => {
  const [status, setStatus] = useState('none');
  const [formData, setFormData] = useState(initialState);
  const [medicationData, setMedicationData] = useState(medicationInitialState);

  useEffect(async () => {
    const json = await fetchPatients();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('awaiting');

    try {
      const response = await addPatient({
        ...formData,
        joinDate: new Date().toISOString().slice(0, 10),
      });
      const data = response.data;

      setStatus('success');
    } catch (error) {
      setStatus('failure');
    }

    setTimeout(() => {
      setStatus('');
    }, 3000);

    setFormData(initialState);

    setFetch(!fetch);
  };

  const handleMedicationSubmit = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      medications: [...formData.medications, medicationData],
    });
    setMedicationData(medicationInitialState);
  };

  return (
    <Box display='flex' flexDirection='column' m='auto' maxWidth={1000}>
      <Paper style={{ padding: '2em' }}>
        <form onSubmit={handleSubmit}>
          <Typography
            variant='h5'
            color='primary'
            style={{ margin: '0.2em 1em', fontWeight: '700' }}
          >
            ADD PATIENTS
          </Typography>
          <Divider />
          {/* <Box display='flex' m={2}>
            <Typography
              variant='h6'
              color='secondary'
              style={{ margin: '0 1em', width: '150px' }}
            >
              User Type
            </Typography>
            <RadioGroup
              aria-label='user-type'
              name='user-type'
              value={formData.type}
              onChange={(e) =>
                setFormData({ ...formData, type: e.target.value })
              }
            >
              <Box display='flex'>
                <FormControlLabel
                  value='patient'
                  control={<Radio color='primary' />}
                  label='Patient'
                />
                <FormControlLabel
                  value='doctor'
                  control={<Radio color='primary' />}
                  label='Doctor'
                />
              </Box>
            </RadioGroup>
          </Box> */}
          <Box display='flex' m={2}>
            <Typography
              variant='h6'
              color='secondary'
              style={{ margin: '0 0.5em', width: '250px' }}
            >
              Basic Info
            </Typography>
            <div>
              <TextField
                id='first-name'
                label='First Name'
                style={{ margin: 8 }}
                placeholder='First name'
                InputLabelProps={{
                  shrink: true,
                }}
                variant='outlined'
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
              />
              <TextField
                id='last-name'
                label='Last Name'
                style={{ margin: 8 }}
                placeholder='Last name'
                InputLabelProps={{
                  shrink: true,
                }}
                variant='outlined'
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
              />
              <TextField
                id='age'
                label='Age'
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
                id='phone'
                label='Phone'
                style={{ margin: 8 }}
                placeholder='Phone'
                InputLabelProps={{
                  shrink: true,
                }}
                variant='outlined'
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
              <TextField
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
              <TextField
                id='image'
                label='Image URL'
                style={{ margin: 8 }}
                placeholder='image'
                InputLabelProps={{
                  shrink: true,
                }}
                variant='outlined'
                value={formData.image}
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.value })
                }
              />
              <FormControl style={{ minWidth: '100px' }}>
                <InputLabel id='gender'>Gender</InputLabel>
                <Select
                  labelId='gender'
                  id='gender'
                  value={formData.gender}
                  onChange={(e) =>
                    setFormData({ ...formData, gender: e.target.value })
                  }
                >
                  <MenuItem value={0}>Male</MenuItem>
                  <MenuItem value={1}>Female</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Box>
          <Box display='flex' m={2}>
            <Typography
              variant='h6'
              color='secondary'
              style={{ margin: '0 0.5em', width: '250px' }}
            >
              Vitals
            </Typography>
            <div>
              <TextField
                id='height'
                label='Height (cm)'
                style={{ margin: 8 }}
                placeholder='height'
                InputLabelProps={{
                  shrink: true,
                }}
                variant='outlined'
                value={formData.vitals.height}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    vitals: { ...formData.vitals, height: e.target.value },
                  })
                }
              />
              <TextField
                id='weight'
                label='Weight (kg)'
                style={{ margin: 8 }}
                placeholder='weight'
                InputLabelProps={{
                  shrink: true,
                }}
                variant='outlined'
                value={formData.vitals.weight}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    vitals: { ...formData.vitals, weight: e.target.value },
                  })
                }
              />
              <TextField
                id='mass-index'
                label='Mass Index (BMI)'
                style={{ margin: 8 }}
                placeholder='Mass Index'
                InputLabelProps={{
                  shrink: true,
                }}
                variant='outlined'
                value={formData.vitals.massIndex}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    vitals: { ...formData.vitals, massIndex: e.target.value },
                  })
                }
              />
              <TextField
                id='fat'
                label='Fat (%)'
                style={{ margin: 8 }}
                placeholder='Fat'
                InputLabelProps={{
                  shrink: true,
                }}
                variant='outlined'
                value={formData.vitals.fat}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    vitals: { ...formData.vitals, fat: e.target.value },
                  })
                }
              />
              <TextField
                id='bbi'
                label='BBI (c)'
                style={{ margin: 8 }}
                placeholder='BBI'
                InputLabelProps={{
                  shrink: true,
                }}
                variant='outlined'
                value={formData.vitals.bbi}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    vitals: { ...formData.vitals, bbi: e.target.value },
                  })
                }
              />
            </div>
          </Box>
          <Box display='flex' m={2}>
            <Typography
              variant='h6'
              color='secondary'
              style={{ margin: '0 1em' }}
            >
              Medications
            </Typography>
            <form onSubmit={handleMedicationSubmit}>
              <div>
                <TextField
                  id='medicationName'
                  label='Name'
                  style={{ margin: 8 }}
                  placeholder='Name'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant='outlined'
                  value={medicationData.name}
                  onChange={(e) =>
                    setMedicationData({
                      ...medicationData,
                      name: e.target.value,
                    })
                  }
                />
                <TextField
                  id='medicationType'
                  label='Type'
                  style={{ margin: 8 }}
                  placeholder='Type'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant='outlined'
                  value={medicationData.type}
                  onChange={(e) =>
                    setMedicationData({
                      ...medicationData,
                      type: e.target.value,
                    })
                  }
                />
                <TextField
                  id='medicationDuration'
                  label='Duration'
                  style={{ margin: 8 }}
                  placeholder='Duration'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant='outlined'
                  value={medicationData.duration}
                  onChange={(e) =>
                    setMedicationData({
                      ...medicationData,
                      duration: e.target.value,
                    })
                  }
                />
              </div>

              <Button type='button' variant='outlined'>
                Add Medication
              </Button>
            </form>
          </Box>
          <Box display='flex'>
            <div></div>

            <Button
              disabled={status === 'awaiting'}
              type='submit'
              variant='contained'
              size='large'
            >
              Add User
            </Button>
            {status === 'success' && <Alert severity='success'>Success!</Alert>}
            {status === 'error' && <Alert severity='error'>Failure!</Alert>}
            {status === 'awaiting' && (
              <Alert severity='info'>Awaiting Response!</Alert>
            )}
          </Box>
        </form>
        {status === 'awaiting' && (
          <LinearProgress style={{ margin: '1em 0' }} />
        )}
      </Paper>
    </Box>
  );
};

export default AddUser;
