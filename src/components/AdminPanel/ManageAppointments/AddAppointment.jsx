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
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
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

const initialState = { patientID: '', doctorID: '', date: '', time: '' };

const AddAppointment = () => {
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setStatus('awaiting');

    try {
      //   const data = response.data;
      //   setStatus('success');
    } catch (error) {
      //   setStatus('failure');
    }

    // setTimeout(() => {
    //   setStatus('');
    // }, 3000);

    setFormData(initialState);

    // setFetch(!fetch);
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
            ADD APPOINTMENT
          </Typography>
          <Divider />

          <Box display='flex' m={2}>
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
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant='inline'
                  format='MM-dd-yyyy'
                  margin='normal'
                  id='date-picker-inline'
                  label='Date picker inline'
                  // value={selectedDate}
                  // onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider>
            </div>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default AddAppointment;
