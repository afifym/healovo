import {
  Box,
  Button,
  Divider,
  FormGroup,
  TextField,
  Typography,
  Snackbar,
  LinearProgress,
  Paper,
  MenuItem,
  Select,
  InputLabel,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { addAppointment } from '../../../utils/firebase';

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

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
  patientID: '',
  doctorID: '',
  type: '',
  date: '',
};

const AddAppointment = ({ fetch, setFetch, update }) => {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState('');

  const [selectedDate, setSelectedDate] = useState(
    new Date('2014-08-18T21:11:54')
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('awaiting');

    try {
      const response = addAppointment({
        ...formData,
        date: selectedDate.toISOString(),
      });
      setStatus('success');
    } catch (error) {
      console.log(error);
      setStatus('failure');
    }

    setTimeout(() => {
      setStatus('');
    }, 3000);

    setFormData(initialState);
    setFetch(!fetch);
  };

  return (
    <Box display='flex' flexDirection='column' m='auto' maxWidth={1000}>
      <Paper style={{ padding: '2em' }}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <form onSubmit={handleSubmit}>
            <Typography
              variant='h5'
              color='primary'
              style={{ margin: '0.2em 1em', fontWeight: '700' }}
            >
              ADD APPOINTMENT
            </Typography>
            <Divider />

            <Box m={1} p={1}>
              <Typography
                variant='h6'
                color='secondary'
                style={{ margin: '0 1em', width: '200px' }}
              >
                Info
              </Typography>
              <div>
                <TextField
                  id='patient-id'
                  label='Patient ID'
                  style={{ margin: 8 }}
                  placeholder='Patient ID'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant='outlined'
                  value={formData.patientID}
                  onChange={(e) =>
                    setFormData({ ...formData, patientID: e.target.value })
                  }
                />
                <TextField
                  id='doctor-id'
                  label='Doctor ID'
                  style={{ margin: 8 }}
                  placeholder='Doctor ID'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant='outlined'
                  value={formData.doctorID}
                  onChange={(e) =>
                    setFormData({ ...formData, doctorID: e.target.value })
                  }
                />
              </div>
              <Box>
                <div>
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
                </div>
                <div>
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
                </div>
              </Box>
              <Box>
                <FormControl style={{ minWidth: '100px' }}>
                  <InputLabel id='appointmentType'>Type</InputLabel>
                  <Select
                    labelId='appointmentType'
                    id='type'
                    value={formData.type}
                    onChange={(e) =>
                      setFormData({ ...formData, type: e.target.value })
                    }
                  >
                    <MenuItem value='home'>Home</MenuItem>
                    <MenuItem value='clinic'>Clinic</MenuItem>
                    <MenuItem value='video'>Video</MenuItem>
                  </Select>
                </FormControl>
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
                {update ? 'Update Appointment' : 'Add Appointment'}
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
        </MuiPickersUtilsProvider>
      </Paper>
    </Box>
  );
};

export default AddAppointment;
