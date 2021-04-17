import {
  Box,
  Button,
  Divider,
  FormGroup,
  TextField,
  Typography,
  Snackbar,
  LinearProgress,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { useState } from 'react';
import { developmentAPI } from '../../utils/firebase';
import axios from 'axios';

function Alert(props) {
  return (
    <MuiAlert
      style={{ margin: '0 1em', width: '400px', transition: 'all 0.2s ease' }}
      variant='filled'
      {...props}
    />
  );
}

const AddUser = () => {
  const [status, setStatus] = useState('none');

  const [formData, setFormData] = useState({
    type: 'patient',
    firstName: '',
    lastName: '',
    age: '',
    phone: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('request sent');

    setStatus('awaiting');

    try {
      const response = await axios.post(
        developmentAPI + '/patients.json',
        formData
      );
      const data = response.data;
      setStatus('success');
      setTimeout(() => {
        setStatus('');
      }, 3000);
    } catch (e) {
      setStatus('failure');
    }

    setFormData({
      ...formData,
      firstName: '',
      lastName: '',
      age: '',
      phone: '',
      email: '',
      password: '',
    });
  };

  return (
    <Box display='flex' flexDirection='column' m='auto' maxWidth={1000}>
      <form onSubmit={handleSubmit}>
        <Typography
          variant='h4'
          color='secondary'
          style={{ margin: '0.2em 1em' }}
        >
          Add User
        </Typography>
        <Divider />
        <Box display='flex' m={2}>
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
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
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
        </Box>
        <Box display='flex' m={2}>
          <Typography
            variant='h6'
            color='secondary'
            style={{ margin: '0 1em', width: '200px' }}
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
          </div>
        </Box>
        <Box display='flex'>
          <Typography
            variant='h6'
            color='secondary'
            style={{ margin: '0 1em' }}
          >
            Medical Info
          </Typography>
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
      {status === 'awaiting' && <LinearProgress style={{ margin: '1em 0' }} />}
    </Box>
  );
};

export default AddUser;
