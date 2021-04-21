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
import { addPatient, updatePatient } from '../../../../utils/firebase';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import styled, { css } from 'styled-components';

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
  age: '',
  image: '',
  email: '',
  password: '',
  gender: '',
  phone: [],
  location: '',

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

const phoneInitialState = '';

const AddUser = ({ fetch, setFetch, update, selected }) => {
  const [status, setStatus] = useState('none');
  const [formData, setFormData] = useState(initialState);
  const [medicationData, setMedicationData] = useState(medicationInitialState);
  const [phoneData, setPhoneData] = useState(phoneInitialState);

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

        console.log(updateData);

        selected.forEach(async (id) => {
          const response = await updatePatient(id, updateData);
          const data = response.data;
        });
      } else {
        const response = await addPatient({
          ...formData,
          joinDate: new Date().toISOString().slice(0, 10),
          type: 'patient',
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
    setMedicationData(medicationInitialState);
    setPhoneData(phoneInitialState);
    setFetch(!fetch);
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
              {update ? 'UPDATE PATIENTS' : 'ADD PATIENTS'}
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
                <TextField
                  id='address'
                  label='Address'
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
                <FormControl style={{ minWidth: '100px' }}>
                  <InputLabel id='gender' style={{ margin: '0.2em' }}>
                    Gender
                  </InputLabel>
                  <Select
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
                  style={{ margin: '1em 0' }}
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
            <Box display='flex' border={1} m={1} borderRadius={16} p={1}>
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
            <Box border={1} borderRadius={16} p={1} m={1}>
              <Box display='flex' m={2}>
                <Typography
                  variant='h6'
                  color='secondary'
                  style={{ margin: '0 1em' }}
                >
                  Medications
                </Typography>
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
              </Box>
              <Box my={1}>
                <Button
                  type='button'
                  color='secondary'
                  variant='contained'
                  style={{ margin: '1em 0' }}
                  onClick={() => {
                    setFormData({
                      ...formData,
                      medications: [...formData.medications, medicationData],
                    });
                    setMedicationData(medicationInitialState);
                  }}
                >
                  Add Medication
                </Button>
                {formData.medications.map((m, i) => (
                  <Alert key={i} severity='info' style={{ margin: '0.5em 0' }}>
                    {m.name}, {m.type}, {m.duration}
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
                {update ? 'Update Patient' : 'Add Patient'}
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
