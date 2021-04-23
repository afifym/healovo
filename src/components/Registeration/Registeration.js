import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  FormControlLabel,
  Grid,
  Radio,
  Step,
  StepLabel,
  Stepper,
} from "@material-ui/core";
import { Field, Formik, Form, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, RadioGroup, CheckboxWithLabel } from "formik-material-ui";
import GradientButton from "../shared/GradientButton/GradientButton";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import {
  addDoctor,
  addPatient,
  auth,
  fetchUserByEmail,
} from "../../utils/firebase";
import { Link } from "react-router-dom";

const initialValues = {
  type: "",
  first: "",
  last: "",
  password: "",
  confirmPassword: "",
  email: "",
  phone: [""],
  verificationCode: "",
  terms: false,
  news: false,
  speciality: "",
  degree: "",
  university: "",
};
// Acts like sending API request
// const sleep = (time) => new Promise((acc) => setTimeout(acc, time));

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

  if (values.type === "doctor") {
    let data = { name, ...withoutAdditionals };
    await addDoctor(data);
  } else if (values.type === "patient") {
    let { degree, speciality, university, ...data } = withoutAdditionals;
    data = { name, ...data };
    await addPatient(data);
  }
  await auth.createUserWithEmailAndPassword(email, password);

  auth.signInWithEmailAndPassword(email, password);
  console.log(auth.currentUser.email);

  let usr = await fetchUserByEmail(email);
  console.log(usr);
};

function Registeration() {
  const [isDoctor, setIsDoctor] = useState(false);

  return (
    <Card variant="outlined" style={{ margin: "10px" }}>
      <CardContent>
        <FormikStepper initialValues={initialValues} onSubmit={onSubmit}>
          <FormikStep
            label="Account Type"
            validationSchema={Yup.object({
              type: Yup.string().required("Please select the account type!"),
            })}
          >
            <Field
              name="type"
              component={RadioGroup}
              label="Account Type"
              aria-label="type"
              control="radio"
            >
              <FormControlLabel
                value="patient"
                label="Patient"
                control={<Radio />}
                onClick={() => setIsDoctor(false)}
              />
              <FormControlLabel
                value="doctor"
                label="Doctor"
                control={<Radio />}
                onClick={() => setIsDoctor(true)}
              />
            </Field>

            <ErrorMessage name="type" component="h5" style={{ color: "red" }} />
          </FormikStep>

          <FormikStep
            label="Registeration"
            validationSchema={Yup.object({
              first: Yup.string().required("First Name is Required!"),
              last: Yup.string().required("Last Name is Required!"),
              email: Yup.string()
                .email("Invalid E-mail format!")
                .required("Email is Required!"),
              password: Yup.string()
                .required("Password is Required!")
                .min(6, "Password must be at least 6 characters"),
              phone: Yup.array().required("Phone is Required!"),
              confirmPassword: Yup.string()
                .oneOf([Yup.ref("password"), ""], "Passwords must match")
                .required("Confirm Password is Required!"),
              terms: Yup.bool()
                .oneOf([true], "Must Accept Terms and Conditions")
                .required("Must check the Terms!"),
            })}
          >
            <Grid container spacing={2}>
              <Grid item>
                <Box paddingBottom={2}>
                  <GradientButton variant="contained" type="button">
                    Signup With Google
                  </GradientButton>
                </Box>
              </Grid>

              <Grid item>
                <Box paddingBottom={2}>
                  <GradientButton variant="contained" type="button">
                    Signup With Facebook
                  </GradientButton>
                </Box>
              </Grid>
            </Grid>

            <Box paddingBottom={2}>
              <Grid container spacing={2}>
                <Grid item>
                  <Field
                    name="first"
                    component={TextField}
                    label="First Name*"
                    variant="outlined"
                  />
                </Grid>
                <Grid item>
                  <Field
                    name="last"
                    component={TextField}
                    label="Last Name*"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </Box>

            <Box paddingBottom={2}>
              <Grid container spacing={2}>
                <Grid item>
                  <Field
                    name="email"
                    component={TextField}
                    label="Email*"
                    type="email"
                    variant="outlined"
                  />
                </Grid>

                <Grid item>
                  <FieldArray name="phone">
                    {(fieldArrayProps) => {
                      const { push, remove, form } = fieldArrayProps;
                      const { values } = form;
                      const { phone } = values;
                      return (
                        <Box>
                          {phone.map((phoneNumber, idx) => (
                            <div key={idx}>
                              <Field
                                style={{ marginBottom: "1rem" }}
                                variant="outlined"
                                component={TextField}
                                label="Phone*"
                                name={`phone[${idx}]`}
                              />
                              {idx === 0 && (
                                <Button type="button" onClick={() => push("")}>
                                  +
                                </Button>
                              )}
                              {idx > 0 && (
                                <Button
                                  type="button"
                                  onClick={() => remove(idx)}
                                >
                                  -
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
                    name="password"
                    component={TextField}
                    label="password*"
                    type="password"
                    variant="outlined"
                  />
                </Grid>
                <Grid item>
                  <Field
                    name="confirmPassword"
                    component={TextField}
                    label="Confirm Password*"
                    type="password"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </Box>
            <Box paddingBottom={2}>
              <Field
                type="checkbox"
                component={CheckboxWithLabel}
                name="terms"
                Label={{ label: "I’ve read and agreed on" }}
              />
              <Link to="#">Terms of Service</Link>
              <ErrorMessage
                name="terms"
                component="h5"
                style={{ color: "red" }}
              />
            </Box>
            <Box paddingBottom={2}>
              <Field
                type="checkbox"
                component={CheckboxWithLabel}
                name="news"
                Label={{ label: "I want to recieve news feed" }}
              />
            </Box>
          </FormikStep>

          {isDoctor ? (
            <FormikStep
              label="Additional Info"
              validationSchema={Yup.object({
                speciality: Yup.string().required(
                  "Specialization is Required!"
                ),
                degree: Yup.string().required("Degree is Required!"),
                university: Yup.string().required("University is Required!"),
              })}
            >
              <Box paddingBottom={2}>
                <Field
                  name="speciality"
                  component={TextField}
                  label="Speciality*"
                  variant="outlined"
                />
              </Box>
              <Box paddingBottom={2}>
                <Field
                  name="degree"
                  component={TextField}
                  label="Highest Degree*"
                  variant="outlined"
                />
              </Box>
              <Box paddingBottom={2}>
                <Field
                  name="university"
                  component={TextField}
                  label="University*"
                  variant="outlined"
                />
              </Box>
            </FormikStep>
          ) : null}

          <FormikStep
            label="Confirmation"
            validationSchema={Yup.object({
              verificationCode: Yup.string()
                .required("Please Enter the verification code!")
                .min(6, "Must be 6-digits")
                .max(6, "Must be 6-digits"),
            })}
          >
            <Box paddingBottom={2}>
              <h3>We’ve sent a 6-digit code, please check your E-mail</h3>
              <Field
                name="verificationCode"
                style={{ margin: "1rem 0px" }}
                component={TextField}
                label="Verification*"
                variant="outlined"
                placeholder="6-digit Code"
              />
              <p>
                <Link to="#">Resend code</Link>
              </p>
            </Box>
          </FormikStep>

          <FormikStep label="Activation">
            <Box paddingBottom={2}>
              <h3>
                Now we’re verifying your info! Till then you can explore our
                services
              </h3>
            </Box>
          </FormikStep>
        </FormikStepper>
      </CardContent>
    </Card>
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
          helpers.resetForm();
          setStep(0);
        } else {
          setStep((s) => s + 1);
        }
      }}
    >
      {({ formik, isSubmitting }) => (
        <Form autoComplete="off">
          <Stepper alternativeLabel activeStep={step}>
            {childrenArray.map((child, idx) => (
              <Step key={child.props.label} completed={step > idx || completed}>
                <StepLabel>{child.props.label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {currentChild}
          <Grid container spacing={2}>
            {/* Show back button if not the first step */}
            {step > 0 ? (
              <Grid item>
                <Button
                  disabled={isSubmitting}
                  size="large"
                  color="secondary"
                  onClick={() => setStep((s) => s - 1)}
                >
                  Back
                </Button>
              </Grid>
            ) : null}
            <Grid item>
              <Button
                startIcon={
                  isSubmitting ? <CircularProgress size="1rem" /> : null
                }
                disabled={isSubmitting}
                size="large"
                color="primary"
                variant="contained"
                type="submit"
              >
                {isLastStep() ? "Explore" : "Next"}
                <IoIosArrowDroprightCircle color="#ffffff" size="1.5rem" />
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default Registeration;
