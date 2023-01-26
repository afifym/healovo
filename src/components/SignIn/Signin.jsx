import React, { useState, useEffect, Fragment } from 'react';
import firebase from 'firebase';
import StyleFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth';
import { userIdActions } from '../../store/userId';
import {
  fetchOneDoctor,
  fetchOnePatient,
  fetchUserByEmail,
  jsonToArray,
} from '../../utils/firebase';
import { useHistory } from 'react-router-dom';
import { patientActions } from '../../store/patientData';
import { doctorActions } from '../../store/doctorData';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],

  callbacks: {
    signInSuccessWithAuthResult: async (authResult) => {
      const userInfo = authResult.additionalUserInfo;
      if (userInfo.isNewUser && userInfo.providerId === 'password') {
        try {
          await authResult.user.sendEmailVerification();
        } catch (error) {
          console.log('email error');
        }
      }
      return false;
    },
  },
};

const signOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log('signed out');
    })
    .catch((error) => console.log(error));
};

const Signin = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const authObserver = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      if (user) {
        dispatch(authActions.login());
        history.push('/dashboard');
      } else {
        dispatch(authActions.logout());
      }
    });
    return authObserver;
  }, []); // -------->>>> put dispatch here inside brackets

  const userData = async () => {
    const signinData = await fetchUserByEmail(user?.email);

    if (signinData) {
      const objectWithKey = jsonToArray(signinData);
      dispatch(userIdActions.updateId(objectWithKey[0].id));
      const userId = objectWithKey[0].id;
      const userType = objectWithKey[0].type;

      const fetchData = async () => {
        try {
          let userData;
          if (userType === 'patient') {
            console.log('PATIENT');
            userData = await fetchOnePatient(userId);
            console.log('CLG: ', userData);
            dispatch(patientActions.addPatientData(userData));
          } else if (userType === 'doctor') {
            console.log('DOCTOR');
            userData = await fetchOneDoctor('-MZ0oM1wcCtu7P1thSnc');
            console.log('CLG: ', userData);
            dispatch(doctorActions.addDoctorData(userData));
          }
          // const appointmentData = await fetchOneAppointment(
          //   "-MZ1MUdMgQT7A2XUQWfA"
          // );
          // dispatch(appointmentActions.addAppointmentData(appointmentData));
          // setAppointmentData(appointmentData);
        } catch (error) {
          console.log('fetching error: ', error);
        }
      };

      fetchData();
      if (userType === 'doctor') {
        dispatch(authActions.isDoctor());
      } else {
        dispatch(authActions.isPatient());
      }
    }
  };

  userData();

  if (user) {
    return (
      <Fragment>
        <h3>Welcome {user.displayName}</h3>
        <p>{user.email}</p>
        <button onClick={signOut}>Sign out</button>
      </Fragment>
    );
  } else {
    return (
      <Wrapper
        style={{ height: '100vh' }}
        display='flex'
        alignItems='center'
        justifyContent='center'
        flexDirection='column'
      >
        <Link to='/'>
          <img
            src='/assets/images/healovo-black.svg'
            alt='healovo'
            style={{ width: '200px', marginBottom: '3em' }}
          />
        </Link>
        <div style={{ marginBottom: '7em' }}>
          <StyleFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </div>
      </Wrapper>
    );
  }
};

const Wrapper = styled(Box)`
  background-image: url('/assets/images/signup-bg.svg');
  background-position: bottom bottom;
  background-size: 100% 100vw;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
`;

export default Signin;
