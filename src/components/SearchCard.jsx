import { Box, FormGroup, Grid, InputAdornment, Paper } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { IoLocationSharp } from "react-icons/io5";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { FaMedkit } from "react-icons/fa";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { FaSearch } from "react-icons/fa";

import { IoHome } from "react-icons/io5";
import { IoVideocam } from "react-icons/io5";

import { RiHomeHeartFill } from "react-icons/ri";
import { IoSearchCircle } from "react-icons/io5";
import GradientButton from "./shared/GradientButton/GradientButton";

const useStyles = makeStyles(() => ({
  feild: {
    marginTop: 15,
    marginBottom: 15,
    display: "block",
  },
  fontSmell: {
    fontSize: 10,
  },
  flexDiv: {
    display: "flex",
    alignItems: "center",
  },
  marginLeft: {
    marginLeft: "10px",
  },
  customeCountianer: {
    maxWidth: 580,
    minWidth: 320,
    margin: "0 auto",
    background: "linear-gradient(152.21deg, #FFFFFF 48.23%, #CFCDC6 100%)",
    boxShadow: "4px 4px 30px rgba(91, 85, 85, 0.25)",
    borderRadius: "50px",
    padding: "80px 40px",
    ["@media (max-width:540px)"]: {
      background: "none",
      boxShadow: "none",
      borderRadius: "0px",
      padding: "0 15px",
      paddingTop: 25,
    },
    ["@media (max-width:420px)"]: {},
    ["@media (max-width:370px)"]: {},
    ["@media (max-width:350px)"]: {},
  },
  searchBtn: {
    background: "linear-gradient(135deg, #FFFFFF 0%, #E7E8E9 78.44%)",
    boxShadow: "4px 4px 29px rgba(87, 87, 87, 0.25)",
    borderRadius: "22px",
    color: "#2D50EF",
    width: "288.01px",
    fontWeight: "bolder",
    margin: "0 auto",
    display: "flex",
  },
  box: {
    width: "105.18px",
    height: "104.35px",
    background: "linear-gradient(134.5deg, #FFFFFF 0.04%, #E7E8E9 99.79%)",
    boxShadow: "7px 7px 30px rgba(180, 180, 180, 0.25)",

    borderRadius: "20px",
    padding: 0,
    ["@media (max-width:576px)"]: {
      width: "auto",
      height: "auto",
      padding: "10px 15px",
    },
  },

  heading: {
    fontWeight: "bolder",
  },
  customeHeading: {
    marginBottom: 0,
  },
  headingBg: {
    backgroundColor: "#EFC660",
    padding: "5px 10px",
    maxWidth: "340px",
    marginLeft: -10,
    ["@media (max-width:350px)"]: {
      maxWidth: "320px",
      padding: "5px 10px",
      fontSize: "1.979rem",
    },
  },
  IconGroup: {
    padding: "60px 0 30px 0",
  },
  smellContainer: {
    maxWidth: 500,
    width: "90%",
    margin: "0 auto",
  },
  InputFieldsContainer: {
    maxWidth: 360,
    margin: "0 auto",
  },
}));

const SearchCard = () => {
  const classes = useStyles();
  return (
    <div className={classes.customeCountianer}>
      <header>
        <Typography
          variant="h4"
          className={`${classes.heading} ${classes.headingBg}`}
          component="h2"
          gutterBottom
        >
          Not feeling well?
        </Typography>
        <Typography
          variant="h2"
          className={`${classes.heading} ${classes.customeHeading}`}
          component="h2"
          gutterBottom
        >
          Find a Doctor
        </Typography>
        <Typography
          variant="h4"
          className={classes.heading}
          component="h2"
          gutterBottom
        >
          Book an Appointment
        </Typography>

        <FormGroup align="center">
          <Grid
            className={`${classes.IconGroup}  ${classes.smellContainer}`}
            container
            spacing={3}
          >
            <Grid item xs={4}>
              <Button variant="contained" className={classes.box}>
                <Grid container>
                  <Grid container item lg={12} justify="center">
                    <RiHomeHeartFill fontSize="40" />
                  </Grid>
                  <Grid container item lg={12} justify="center">
                    <Typography component="p">Clinc</Typography>
                  </Grid>
                </Grid>
              </Button>
            </Grid>

            <Grid item xs={4}>
              <Button variant="contained" className={classes.box}>
                <Grid container>
                  <Grid container item lg={12} justify="center">
                    <IoHome fontSize="40" />
                  </Grid>
                  <Grid container item lg={12} justify="center">
                    <Typography component="p">Home</Typography>
                  </Grid>
                </Grid>
              </Button>
            </Grid>

            <Grid item xs={4}>
              <Button variant="contained" className={classes.box}>
                <Grid container>
                  <Grid container item lg={12} justify="center">
                    <IoVideocam fontSize="40" />
                  </Grid>
                  <Grid container item lg={12} justify="center">
                    <Typography component="p">Vedio</Typography>
                  </Grid>
                </Grid>
              </Button>
            </Grid>
          </Grid>
        </FormGroup>
      </header>

      <form className={classes.InputFieldsContainer}>
        <Box component="div" mb={5}>
          <TextField
            fullWidth
            id="standard-basic"
            className={classes.feild}
            label={
              <div className={classes.flexDiv}>
                <IoLocationSharp fontSize="small" />
                <span className={(classes.fontSmell, classes.marginLeft)}>
                  City
                </span>
              </div>
            }
          />

          <TextField
            fullWidth
            id="standard-basic"
            className={classes.feild}
            label={
              <div className={classes.flexDiv}>
                <FaMedkit fontSize="small" />
                <span className={(classes.fontSmell, classes.marginLeft)}>
                  Doctor Name
                </span>
              </div>
            }
          />

          <TextField
            fullWidth
            id="standard-basic"
            className={classes.feild}
            label={
              <div className={classes.flexDiv}>
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.86453 8.33721C4.83556 8.33721 3.19115 6.65854 3.19115 4.58731C3.19115 2.51607 4.83556 0.837402 6.86453 0.837402C8.8935 0.837402 10.5379 2.51607 10.5379 4.58731C10.5379 6.65854 8.8935 8.33721 6.86453 8.33721ZM10.3083 13.259C10.3083 13.6486 10.0012 13.9621 9.61956 13.9621C9.23788 13.9621 8.9308 13.6486 8.9308 13.259C8.9308 12.8693 9.23788 12.5559 9.61956 12.5559C10.0012 12.5559 10.3083 12.8693 10.3083 13.259ZM4.1095 9.29227V10.7278C3.06201 10.9446 2.27281 11.8938 2.27281 13.0246V14.2462C2.27281 14.4689 2.42778 14.6622 2.64302 14.7062L3.5671 14.8937C3.6905 14.9201 3.81104 14.838 3.83687 14.7091L3.92583 14.2492C3.95166 14.1232 3.8713 13.9972 3.74503 13.9738L3.19115 13.8595V13.0246C3.19115 11.1848 5.94619 11.1174 5.94619 13.0803V13.8625L5.39231 13.9767C5.26891 14.0031 5.18855 14.1261 5.21151 14.2521L5.30048 14.712C5.3263 14.838 5.44684 14.9201 5.57024 14.8966L6.46562 14.7736C6.69234 14.7413 6.86166 14.5451 6.86166 14.3078V13.0246C6.86166 11.8938 6.07246 10.9475 5.02497 10.7278V9.40359C5.08811 9.4241 5.15125 9.43582 5.21438 9.45925C5.73095 9.64382 6.28483 9.74636 6.86166 9.74636C7.4385 9.74636 7.99237 9.64382 8.50894 9.45925C8.72131 9.38308 8.93654 9.33621 9.15752 9.30691V11.6975C8.49459 11.8996 8.00959 12.5207 8.00959 13.2619C8.00959 14.1671 8.72992 14.9025 9.61669 14.9025C10.5035 14.9025 11.2238 14.1671 11.2238 13.2619C11.2238 12.5207 10.7388 11.8996 10.0759 11.6975V9.34207C11.9011 9.65554 13.2929 11.261 13.2929 13.2121V14.5246C13.2929 15.2482 12.7161 15.837 12.0073 15.837H1.7218C1.01296 15.837 0.436123 15.2482 0.436123 14.5246V13.2121C0.436123 11.1028 2.06618 9.3948 4.1095 9.29227Z"
                    fill="#6C7288"
                  />
                </svg>

                <span className={(classes.fontSmell, classes.marginLeft)}>
                  Specialty
                </span>
              </div>
            }
          />
        </Box>
        <Grid item container justify="center">
          <GradientButton
            className={classes.searchBtn}
            width="210px"
            icon={<FaSearch color="#ffffff" size={15} />}
          >
            Search
          </GradientButton>
        </Grid>
      </form>
    </div>
  );
};

export default SearchCard;
