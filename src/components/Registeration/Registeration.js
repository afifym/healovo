import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  LinearProgress,
  MenuItem,
  Radio,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from '@material-ui/core';
import { Field, Formik, Form, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField, RadioGroup, CheckboxWithLabel } from 'formik-material-ui';
import GradientButton from '../shared/GradientButton/GradientButton';
import firebase, { addDoctor, addPatient, auth } from '../../utils/firebase';
import { Link } from 'react-router-dom';

import styled, { css } from 'styled-components';
import StepConnector from '@material-ui/core/StepConnector';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  FaUserFriends,
  FaUserEdit,
  FaUserMd,
  FaUserShield,
  FaUserCheck,
} from 'react-icons/fa';
import clsx from 'clsx';
import { FaUserNurse, FaUserAlt } from 'react-icons/fa';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { GrAdd } from 'react-icons/gr';
import { IoMdRemove } from 'react-icons/io';

const initialValues = {
  type: '',
  first: '',
  last: '',
  password: '',
  confirmPassword: '',
  email: '',
  phone: [''],
  verificationCode: '',
  terms: false,
  news: false,
  speciality: '',
  degree: '',
  university: '',
};

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundColor: '#2D50EF',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundColor: '#2D50EF',
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <FaUserFriends />,
    2: <FaUserEdit />,
    3: <FaUserMd />,
    4: <FaUserShield />,
    5: <FaUserCheck />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundColor: '#2D50EF',
      height: '10px',
      marginBottom: '5px',
    },
  },
  completed: {
    '& $line': {
      backgroundColor: '#2D50EF',
      height: '10px',
      marginBottom: '5px',
    },
  },
  line: {
    height: '10px',
    marginBottom: '5px',
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const StyledStepper = styled(Stepper)``;

const Wrapper = styled.div`
  background-image: url('/assets/images/signup-bg.svg');
  background-position: bottom bottom;
  background-size: 100% 100vw;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
`;

const StyledRadioControl = styled(FormControlLabel)`
  background: ${({ theme }) => theme.gradients.gradient1};
  border-radius: 15px;
  width: 180px;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6c7288;
  transition: color 0.2s ease;
  box-shadow: 7px 7px 30px rgba(180, 180, 180, 0.25);

  .MuiSvgIcon-root {
    visibility: hidden;
  }

  .MuiTypography-root {
    margin-top: 2em;
    font-weight: 700;
  }

  ${({ isactive }) =>
    isactive &&
    css`
      /* border: 2px solid ${({ theme }) => theme.colors.main1}; */
      background: ${({ theme }) => theme.gradients.gradient4};
      border: none !important;
      .MuiTypography-root {
        color: white;
      }
      span {
        color: white;
      }
    `}

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.main1};
    svg {
      fill: white !important;
    }
  }
`;

const Icon = ({ children, ...props }) => (
  <IconWrapper {...props}>{children}</IconWrapper>
);
const IconWrapper = styled.span`
  pointer-events: none;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  color: #6c7288;
  transition: all 0.2s ease;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e5e5e5;
  border-radius: 50%;
  width: 70px;
  height: 70px;

  ${({ isactive }) =>
    isactive &&
    css`
      color: white;
      background-color: #a7bcfb;
    `}
`;

const RadioWrapper = styled.div`
  position: relative;
  ${({ isactive }) =>
    isactive &&
    css`
      & > span {
        color: ${({ theme }) => theme.colors.light1};
      }
    `}
`;

function Registeration() {
  const [isDoctor, setIsDoctor] = useState(false);
  const history = useHistory();
  const [error, setError] = useState(false);
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const facebookProvider = new firebase.auth.FacebookAuthProvider();

  const signUpWithProvider = (provider) => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        let user = result.user;
        const { email, displayName, phoneNumber, photoURL } = user;
        let fullname = displayName.split(' ');
        const name = {
          first: fullname[0],
          last: fullname[1],
        };
        let userData = { name, email, phone: phoneNumber, photo: photoURL };
        // Add user to realtime database
        isDoctor
          ? addDoctor({ type: 'doctor', ...userData })
          : addPatient({ type: 'patient', ...userData });
        history.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onSubmit = async (values) => {
    let {
      first,
      last,
      confirmPassword,
      news,
      terms,
      verificationCode,
      ...withoutAdditionals
    } = values;
    const name = { first, last };
    const { email, password } = values;

    try {
      await auth.createUserWithEmailAndPassword(email, password);

      if (values.type === 'doctor') {
        let data = { name, ...withoutAdditionals };
        await addDoctor(data);
      } else if (values.type === 'patient') {
        let { degree, speciality, university, ...data } = withoutAdditionals;
        data = { name, ...data };
        await addPatient(data);
      }
      history.push('/');
    } catch (error) {
      console.log('Failed adding user: ', error);
      setError(true);
    }
  };

  return (
    <Wrapper c>
      <div style={{ margin: '0 auto', paddingTop: '4em', height: '100%' }}>
        <Box display='flex' alignItems='center' justifyContent='center'>
          <Link to='/'>
            <img
              src='/assets/images/healovo-black.svg'
              alt='healovo'
              style={{ width: '200px' }}
            />
          </Link>
        </Box>
        <Box>
          <FormikStepper initialValues={initialValues} onSubmit={onSubmit}>
            <FormikStep
              label='Account Type'
              default
              // validationSchema={Yup.object({
              //   type: Yup.string().required("Please select the account type!"),
              // })}
            >
              <Field
                name='type'
                component={RadioGroup}
                label='Account Type'
                aria-label='type'
                control='radio'
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '5em 0',
                  flexDirection: 'row',
                }}
              >
                <RadioWrapper isactive={!isDoctor ? 1 : 0}>
                  <Icon isactive={!isDoctor ? 1 : 0}>
                    <FaUserAlt size={28} />
                  </Icon>
                  <StyledRadioControl
                    isactive={!isDoctor ? 1 : 0}
                    labelPlacement='bottom'
                    value='patient'
                    label='Patient'
                    control={<Radio />}
                    onClick={() => setIsDoctor(false)}
                  />
                </RadioWrapper>
                <RadioWrapper isactive={isDoctor ? 1 : 0}>
                  <Icon isactive={isDoctor ? 1 : 0}>
                    <FaUserNurse size={28} />
                  </Icon>
                  <StyledRadioControl
                    isactive={isDoctor ? 1 : 0}
                    labelPlacement='bottom'
                    value='doctor'
                    label='Doctor'
                    control={<Radio />}
                    onClick={() => setIsDoctor(true)}
                  />
                </RadioWrapper>
              </Field>
              <Box display='flex' justifyContent='center' my={4}>
                <Typography
                  variant='subtitle1'
                  color='secondary'
                  style={{ fontWeight: '500' }}
                >
                  Have an account?{' '}
                  <Link
                    to='/login'
                    style={{
                      textDecoration: 'underline',
                      color: 'hsl(229, 86%, 56%)',
                    }}
                  >
                    Login
                  </Link>
                </Typography>
              </Box>

              <ErrorMessage
                name='type'
                component='h5'
                style={{ color: 'red' }}
              />
            </FormikStep>

            <FormikStep
              label='Registeration'
              validationSchema={Yup.object({
                first: Yup.string().required('First Name is Required!'),
                last: Yup.string().required('Last Name is Required!'),
                email: Yup.string()
                  .email('Invalid E-mail format!')
                  .required('Email is Required!'),
                password: Yup.string()
                  .required('Password is Required!')
                  .min(6, 'Password must be at least 6 characters'),
                phone: Yup.array().required('Phone is Required!'),
                confirmPassword: Yup.string()
                  .oneOf([Yup.ref('password'), ''], 'Passwords must match')
                  .required('Confirm Password is Required!'),
                terms: Yup.bool()
                  .oneOf([true], 'Must Accept Terms and Conditions')
                  .required('Must check the Terms!'),
              })}
            >
              <Box
                display='flex'
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
              >
                <Box>
                  <Box
                    display='flex'
                    flexDirection='column'
                    justifyContent='center'
                    alignItems='center'
                  >
                    <Box paddingBottom={2}>
                      <Button
                        variant='contained'
                        type='button'
                        color='primary'
                        size='large'
                        onClick={() => signUpWithProvider(googleProvider)}
                        startIcon={
                          <FcGoogle
                            style={{
                              backgroundColor: 'white',
                              borderRadius: '50%',
                              padding: '0.1em',
                            }}
                          />
                        }
                      >
                        Signup With Google
                      </Button>
                    </Box>
                    <Box paddingBottom={2}>
                      <Button
                        variant='contained'
                        type='button'
                        color='primary'
                        size='large'
                        onClick={() => signUpWithProvider(facebookProvider)}
                        startIcon={
                          <FaFacebook
                            style={{
                              backgroundColor: 'white',
                              borderRadius: '50%',
                              padding: '0.1em',
                            }}
                            color='blue'
                          />
                        }
                      >
                        Signup With Facebook
                      </Button>
                    </Box>
                  </Box>

                  <Box paddingBottom={2}>
                    <Grid container spacing={2}>
                      <Grid item>
                        <Field
                          name='first'
                          component={TextField}
                          label='First Name*'
                          variant='outlined'
                        />
                      </Grid>
                      <Grid item>
                        <Field
                          name='last'
                          component={TextField}
                          label='Last Name*'
                          variant='outlined'
                        />
                      </Grid>
                    </Grid>
                  </Box>

                  <Box paddingBottom={2}>
                    <Grid container spacing={2}>
                      <Grid item>
                        <Field
                          name='email'
                          component={TextField}
                          label='Email*'
                          type='email'
                          variant='outlined'
                        />
                      </Grid>

                      <Grid item>
                        <FieldArray name='phone'>
                          {(fieldArrayProps) => {
                            const { push, remove, form } = fieldArrayProps;
                            const { values } = form;
                            const { phone } = values;
                            return (
                              <Box>
                                {phone.map((phoneNumber, idx) => (
                                  <div key={idx}>
                                    <Field
                                      style={{ marginBottom: '1rem' }}
                                      variant='outlined'
                                      component={TextField}
                                      label='Phone*'
                                      name={`phone[${idx}]`}
                                    />
                                    {idx === 0 && (
                                      <Button
                                        variant='outlined'
                                        type='button'
                                        onClick={() => push('')}
                                        size='large'
                                        style={{
                                          boxShadow: 'none',
                                          height: '55px',
                                        }}
                                      >
                                        <GrAdd />
                                      </Button>
                                    )}
                                    {idx > 0 && (
                                      <Button
                                        variant='outlined'
                                        type='button'
                                        size='large'
                                        onClick={() => remove(idx)}
                                        style={{
                                          boxShadow: 'none',
                                          height: '55px',
                                        }}
                                      >
                                        <IoMdRemove />
                                      </Button>
                                    )}
                                  </div>
                                ))}
                              </Box>
                            );
                          }}
                        </FieldArray>
                      </Grid>
                    </Grid>
                  </Box>

                  <Box paddingBottom={2}>
                    <Grid container spacing={2}>
                      <Grid item>
                        <Field
                          name='password'
                          component={TextField}
                          label='password*'
                          type='password'
                          variant='outlined'
                        />
                      </Grid>
                      <Grid item>
                        <Field
                          name='confirmPassword'
                          component={TextField}
                          label='Confirm Password*'
                          type='password'
                          variant='outlined'
                        />
                      </Grid>
                    </Grid>
                  </Box>
                  <Box
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    m='auto'
                    paddingBottom={2}
                  >
                    <div>
                      <Field
                        type='checkbox'
                        component={CheckboxWithLabel}
                        name='terms'
                        style={{ marginRight: '-0.5em' }}
                      />
                      <Box display='inline' m={0}>
                        <Typography
                          variant='subtitle1'
                          color='secondary'
                          style={{ fontWeight: '500', margin: '0' }}
                        >
                          I’ve read and agreed on{' '}
                          <Link
                            style={{
                              color: 'hsl(229, 86%, 56%)',
                              textDecoration: 'underline',
                            }}
                            to='/terms-of-service'
                          >
                            Terms of Service
                          </Link>
                        </Typography>
                      </Box>

                      <ErrorMessage
                        name='terms'
                        component='h5'
                        style={{ color: 'red' }}
                      />
                    </div>
                  </Box>
                </Box>
              </Box>
            </FormikStep>

            {isDoctor ? (
              <FormikStep
                label='Additional Info'
                validationSchema={Yup.object({
                  speciality: Yup.string().required('Speciality is Required!'),
                  degree: Yup.string().required('Degree is Required!'),
                  university: Yup.string().required('University is Required!'),
                })}
              >
                <Box my={8} display='flex' justifyContent='center'>
                  <div>
                    <Box paddingBottom={2}>
                      <Field
                        name='speciality'
                        component={TextField}
                        select
                        style={{ width: '266px' }}
                        label='Speciality*'
                        variant='outlined'
                      >
                        <MenuItem value='Pediatrician'>Pediatrician</MenuItem>
                        <MenuItem value='Obstetrician'>Obstetrician</MenuItem>
                        <MenuItem value='Surgeon'>Surgeon</MenuItem>
                        <MenuItem value='Psychiatrist'>Psychiatrist</MenuItem>
                        <MenuItem value='Cardiologist'>Cardiologist</MenuItem>
                        <MenuItem value='Dermatologist'>Dermatologist</MenuItem>
                      </Field>
                    </Box>
                    <Box paddingBottom={2}>
                      <Field
                        style={{ width: '266px' }}
                        name='degree'
                        component={TextField}
                        label='Highest Degree*'
                        variant='outlined'
                      />
                    </Box>
                    <Box paddingBottom={2}>
                      <Field
                        style={{ width: '266px' }}
                        name='university'
                        component={TextField}
                        label='University*'
                        variant='outlined'
                      />
                    </Box>
                  </div>
                </Box>
              </FormikStep>
            ) : null}

            <FormikStep
              label='Confirmation'
              validationSchema={Yup.object({
                verificationCode: Yup.string()
                  .required('Please Enter the verification code!')
                  .min(6, 'Must be 6-digits')
                  .max(6, 'Must be 6-digits'),
              })}
            >
              <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                my={8}
              >
                <Box
                  display='flex'
                  flexDirection='column'
                  aligItems='center'
                  justifyContent='center'
                >
                  <h3>We’ve sent a 6-digit code, please check your E-mail</h3>
                  <Field
                    name='verificationCode'
                    style={{ margin: '1rem 0px' }}
                    component={TextField}
                    label='Verification*'
                    variant='outlined'
                    placeholder='6-digit Code'
                    style={{ margin: '2em 0' }}
                  />
                  <Link
                    to='#'
                    style={{ textAlign: 'center', color: 'hsl(229, 86%, 56%)' }}
                  >
                    Resend code
                  </Link>
                </Box>
              </Box>
            </FormikStep>

            <FormikStep label='Activation'>
              <Box paddingBottom={2}>
                <Typography
                  color='secondary'
                  variant='h5'
                  style={{
                    width: '450px',
                    textAlign: 'center',
                    margin: '2em auto',
                  }}
                >
                  Now we’re verifying your info! Till then you can explore our
                  services
                </Typography>

                {error && (
                  <div
                    style={{
                      color: 'red',
                      fontWeight: '600',
                      textAlign: 'center',
                    }}
                  >
                    An Error Occurred
                  </div>
                )}
              </Box>
            </FormikStep>
          </FormikStepper>
        </Box>
      </div>
    </Wrapper>
  );
}

export function FormikStep({ children }) {
  return <>{children}</>;
}

export function FormikStepper({ children, ...props }) {
  const childrenArray = React.Children.toArray(children);
  // Steps separation
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  const [completed, setCompleted] = useState(false);

  function isLastStep() {
    return step === childrenArray.length - 1;
  }

  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
          setCompleted(true);
          // history.push('/dashboard');
          // helpers.resetForm();
          // setStep(0);
        } else {
          setStep((s) => s + 1);
        }
      }}
    >
      {({ formik, isSubmitting }) => (
        <Form autoComplete='off'>
          <StyledStepper
            alternativeLabel
            activeStep={step}
            connector={<ColorlibConnector />}
          >
            {childrenArray.map((child, idx) => (
              <Step key={child.props.label} completed={step > idx || completed}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>
                  <Typography
                    variant='subtitle2'
                    style={{ fontWeight: '600' }}
                    color='secondary'
                  >
                    {child.props.label}
                  </Typography>
                </StepLabel>
              </Step>
            ))}
          </StyledStepper>
          {currentChild}
          {/* Show back button if not the first step */}
          <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
          >
            <Grid item>
              <GradientButton
                icon={<FaChevronRight color='white' size={14} />}
                disabled={isSubmitting}
                type='submit'
                style={{ marginBottom: '1em' }}
              >
                {isLastStep() ? 'Explore' : 'Next'}
              </GradientButton>
              {isSubmitting && <LinearProgress />}
            </Grid>
            {step > 0 ? (
              <Grid item>
                <Button
                  disabled={isSubmitting}
                  color='secondary'
                  style={{ boxShadow: 'none' }}
                  onClick={() => setStep((s) => s - 1)}
                  startIcon={<FaChevronLeft size={15} />}
                >
                  Back
                </Button>
              </Grid>
            ) : null}
          </Box>
        </Form>
      )}
    </Formik>
  );
}

export default Registeration;
