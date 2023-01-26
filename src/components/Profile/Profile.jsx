import React, { Fragment, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Styled from 'styled-components/macro';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import { patientActions } from '../../store/patientData';
import { doctorActions } from '../../store/doctorData';
import {
  sendPatientProfileData,
  sendDoctorProfileData,
} from '../../store/updateProfileData';
let isInitial = true;

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  textField: {
    margin: 10,
    width: '100%',
  },
}));

const Profile = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const isDoctor = useSelector((state) => state.auth.isDoctor);
  const isPatient = useSelector((state) => state.auth.isPatient);
  const patient = useSelector((state) => state.patient);
  const doctor = useSelector((state) => state.doctor);
  const userId = useSelector((state) => state.userId.id);

  console.log('UID: ', userId);
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [price, setPrice] = useState('');
  const [gender, setGender] = useState('');

  useEffect(() => {
    if (isPatient) {
      setFirst(patient.name?.first);
      setLast(patient.name?.last);
      setEmail(patient.email);
      setPhone(patient.phone);
      setBirthdate(patient.birthdate);
    } else if (isDoctor) {
      setFirst(doctor.name?.first);
      setLast(doctor.name?.last);
      setEmail(doctor.email);
      setPhone(doctor.phone);
      setBirthdate(doctor.birthdate);
      setPrice(doctor.price);
      setGender(doctor.gender);
    }
  }, [patient, doctor, isDoctor]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (patient.isChanged) {
      dispatch(sendPatientProfileData(patient, userId));
    }

    if (doctor.isChanged) {
      dispatch(sendDoctorProfileData(doctor, userId));
    }
  }, [patient, doctor, userId, dispatch]);

  const firstNameHandler = (event) => {
    setFirst(event.target.value);
  };

  const secondNameHandler = (event) => {
    setLast(event.target.value);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const phoneHandler = (event) => {
    setPhone(event.target.value);
  };

  const birthdateHandler = (event) => {
    setBirthdate(event.target.value);
  };

  const priceHandler = (event) => {
    setPrice(event.target.value);
  };

  const genderHandler = (event) => {
    setGender(event.target.value);
  };

  const sendData = (event) => {
    event.preventDefault();

    const doctorData = {
      first,
      last,
      email,
      phone,
      birthdate,
      price,
      gender,
    };

    const patientData = {
      first,
      last,
      email,
      phone,
      birthdate,
    };

    if (isDoctor) {
      dispatch(doctorActions.updateDoctorData(doctorData));
      console.log('doc: ', doctorData);
    } else if (isPatient) {
      dispatch(patientActions.updatePatientData(patientData));
      console.log('pat: ', patientData);
    }
  };

  const cancelData = () => {
    setFirst('');
    setLast('');
    setEmail('');
    setPhone('');
    setBirthdate('');

    if (isDoctor) {
      setPrice('');
      setGender('');
    }
  };

  return (
    <Wrapper>
      <form
        className={classes.root}
        noValidate
        autoComplete='off'
        onSubmit={sendData}
      >
        <div className='inputFieldWrapper'>
          <LabelInput>Name</LabelInput>
          <TextField
            className={classes.textField}
            id='outlined-basic'
            label='First Name'
            variant='outlined'
            required
            value={first}
            onChange={firstNameHandler}
          />
          <TextField
            className={classes.textField}
            id='outlined-basic'
            label='Second Name'
            variant='outlined'
            required
            value={last}
            onChange={secondNameHandler}
          />
        </div>
        <div className='inputFieldWrapper'>
          <LabelInput>Email</LabelInput>
          <TextField
            className={classes.textField}
            id='outlined-basic'
            label='Email'
            variant='outlined'
            required
            value={email}
            onChange={emailHandler}
          />
        </div>
        <div className='inputFieldWrapper'>
          <LabelInput>Phone</LabelInput>
          <TextField
            className={classes.textField}
            id='outlined-basic'
            label='Phone'
            variant='outlined'
            required
            value={phone}
            onChange={phoneHandler}
          />
        </div>
        <div className='inputFieldWrapper'>
          <LabelInput>Birth Date</LabelInput>
          <TextField
            className={classes.textField}
            id='outlined-basic'
            label='Birthdate'
            variant='outlined'
            required
            value={birthdate}
            onChange={birthdateHandler}
          />
        </div>
        {isDoctor && (
          <Fragment>
            <div className='inputFieldWrapper'>
              <LabelInput>Session Price</LabelInput>
              <TextField
                className={classes.textField}
                id='outlined-basic'
                label='Session Price'
                variant='outlined'
                required
                value={price}
                onChange={priceHandler}
              />
            </div>
            <div className='inputFieldWrapper'>
              <LabelInput>Gender</LabelInput>
              <TextField
                className={classes.textField}
                id='outlined-basic'
                label='Gender'
                variant='outlined'
                required
                value={gender}
                onChange={genderHandler}
              />
            </div>
          </Fragment>
        )}

        <Button variant='contained' className='btn' type='submit'>
          Save
        </Button>
        <Button variant='contained' className='btn cancel' onClick={cancelData}>
          Cancel
        </Button>
      </form>
    </Wrapper>
  );
};

const Wrapper = Styled.div`
    margin: auto;

    .inputFieldWrapper {
        display: flex;
        align-items: center;
        width: 100%;

        @media (max-width: 960px) {
            flex-direction: column;
            width: 300px;
        }

        @media (max-width: 400px) {
            width: 200px;
        }
    }

    .btn {
        color: white;
        background: #2D50EF;
        width: 150px;
        margin: 30px 10px 0 10px;

        &:hover {
            background: #2D50EF;
        }
    }

    .cancel {
        background: gray;

        &:hover {
            background: gray;
        }
    }

`;

const LabelInput = Styled.label`
    width: 100px;
    display: none;

`;

export default Profile;
