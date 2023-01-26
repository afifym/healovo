import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import PersonIcon from '@material-ui/icons/Person';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import TuneIcon from '@material-ui/icons/Tune';
import Styled from 'styled-components';

import ProfilePage from './ProfilePage';
import Summary from './Summary';
import Appointments from './Appointments';
import Settings from './Settings';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/auth';

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
      className='debug'
      role='tabpanel'
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
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
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(() => ({
  root: {
    width: '48%',
    margin: 'auto',
  },
}));

export default function PatientProfile() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const isPatient = useSelector((state) => state.auth.isPatient);
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const patientProfile = () => {
    dispatch(authActions.isPatient());
  };

  return (
    <Fragment>
      {isPatient && (
        <Wrapper>
          <div className={classes.root}>
            <AppBar
              position='static'
              color='default'
              style={{ borderRadius: '50px' }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                variant='scrollable'
                scrollButtons='on'
                indicatorColor='primary'
                textColor='primary'
                aria-label='scrollable force tabs example'
              >
                <Tab
                  style={{ marginTop: '1em' }}
                  label='Summary'
                  icon={<ImportContactsIcon />}
                  {...a11yProps(0)}
                  style={{ fontWeight: '700' }}
                />
                <Tab
                  label='Profile'
                  icon={<PersonIcon />}
                  {...a11yProps(1)}
                  style={{ fontWeight: '700' }}
                />
                <Tab
                  style={{ fontWeight: '700' }}
                  label='Appointments'
                  icon={<LibraryBooksIcon />}
                  {...a11yProps(2)}
                />
                <Tab
                  style={{ fontWeight: '700' }}
                  label='Settings'
                  icon={<TuneIcon />}
                  {...a11yProps(3)}
                />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0} className='title'>
              <Summary />
            </TabPanel>
            <TabPanel value={value} index={1} className='title'>
              <ProfilePage />
            </TabPanel>
            <TabPanel value={value} index={2} className='title'>
              <Appointments />
            </TabPanel>
            <TabPanel value={value} index={3} className='title'>
              <Settings />
            </TabPanel>
          </div>
        </Wrapper>
      )}
    </Fragment>
  );
}
