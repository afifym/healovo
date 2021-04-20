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

const initialValues = {
  accountType: "",
  first: "",
  last: "",
  password: "",
  confirmPassword: "",
  email: "",
  phoneNumbers: [""],
  verificationCode: "",
  terms: false,
  news: false,
  speciality: "",
  degree: "",
  university: "",
};

const sleep = (time) => new Promise((acc) => setTimeout(acc, time));

// Acts like sending API request
const onSubmit = async (values) => {
  await sleep(3000);
  console.log(values);
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
              accountType: Yup.string().required(
                "Please select the account type!"
              ),
            })}
          >
            <Field
              name="accountType"
              component={RadioGroup}
              label="Account Type"
              aria-label="accountType"
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

            <ErrorMessage name="accountType" component="h3" />
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
              phoneNumber: Yup.array().min(1, "Phone is Required!"),
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
                  <Button variant="contained" type="button">
                    Signup With Google
                  </Button>
                </Box>
              </Grid>

              <Grid item>
                <Box paddingBottom={2}>
                  <Button variant="contained" type="button">
                    Signup With Facebook
                  </Button>
                </Box>
              </Grid>
            </Grid>

            <Box paddingBottom={2}>
              <Grid container spacing={2}>
                <Grid item>
                  <Field
                    name="first"
                    component={TextField}
                    label="First Name"
                    variant="outlined"
                  />
                </Grid>
                <Grid item>
                  <Field
                    name="last"
                    component={TextField}
                    label="Last Name"
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
                    label="Email"
                    type="email"
                    variant="outlined"
                  />
                </Grid>

                <Grid item>
                  <FieldArray name="phoneNumbers">
                    {(fieldArrayProps) => {
                      const { push, remove, form } = fieldArrayProps;
                      const { values } = form;
                      const { phoneNumbers } = values;
                      return (
                        <Box>
                          {phoneNumbers.map((phoneNumber, idx) => (
                            <div key={idx}>
                              <Field
                                style={{ marginBottom: "1rem" }}
                                variant="outlined"
                                component={TextField}
                                label="Phone*"
                                name={`phoneNumbers[${idx}]`}
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
                    label="password"
                    type="password"
                    variant="outlined"
                  />
                </Grid>
                <Grid item>
                  <Field
                    name="confirmPassword"
                    component={TextField}
                    label="Confirm Password"
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
              <a href="#">Terms of Service</a>
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
              <h3>
                We’ve sent a 6-digit code, please check your email
                (***47@gmail.com)
              </h3>
              <Field
                name="verificationCode"
                component={TextField}
                label="Verification"
                variant="outlined"
                placeholder="6-digit Code"
              />
              <p>
                <a href="#">Resend code</a>
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
                  width="150px"
                  disabled={isSubmitting}
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
                width="150px"
                disabled={isSubmitting}
                size="large"
                color="primary"
                variant="contained"
                type="submit"
              >
                {isLastStep() ? "Explore" : "Next"}
                <IoIosArrowDroprightCircle color="#ffffff" size="2rem" />
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default Registeration;
