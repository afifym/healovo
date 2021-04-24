import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import PersonIcon from "@material-ui/icons/Person";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import TuneIcon from "@material-ui/icons/Tune";
import Styled from "styled-components";
import DoctorProfilePage from "./DoctorProfilePage";
import DoctorSummary from "./DoctorSummary";
import Appointments from "./Appointments";
import Settings from "./Settings";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth";

const Wrapper = Styled.div`

  .title {
      @media (max-width: 560px) {
        display: flex;
        justify-content: center;
    }
  }
`;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "59%",
    margin: "auto",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function DoctorProfile() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const isDoctor = useSelector((state) => state.auth.isDoctor);
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const drProfile = () => {
    dispatch(authActions.isDoctor());
  };

  return (
    <Fragment>
      {isDoctor && (
        <Wrapper>
          <div className={classes.root}>
            <AppBar
              position="static"
              color="default"
              style={{ borderRadius: "30px" }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="on"
                indicatorColor="primary"
                textColor="primary"
                aria-label="scrollable force tabs example"
              >
                <Tab
                  label="Summary"
                  icon={<ImportContactsIcon />}
                  {...a11yProps(0)}
                />
                <Tab label="Profile" icon={<PersonIcon />} {...a11yProps(1)} />
                <Tab
                  label="Appointments"
                  icon={<LibraryBooksIcon />}
                  {...a11yProps(2)}
                />
                <Tab label="Settings" icon={<TuneIcon />} {...a11yProps(3)} />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0} className="title">
              <DoctorSummary />
            </TabPanel>
            <TabPanel value={value} index={1} className="title">
              <DoctorProfilePage />
            </TabPanel>
            <TabPanel value={value} index={2} className="title">
              <Appointments />
            </TabPanel>
            <TabPanel value={value} index={3} className="title">
              <Settings />
            </TabPanel>
          </div>
        </Wrapper>
      )}
    </Fragment>
  );
}
