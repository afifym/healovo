import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import clsx from 'clsx';
import { FiUsers } from 'react-icons/fi';
import { FaUserNurse } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import { BsCardList } from 'react-icons/bs';
import { FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {
  Divider,
  Drawer,
  IconButton,
  List,
  makeStyles,
} from '@material-ui/core';
import styled from 'styled-components';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

const StyledLink = styled(Link)`
  font-weight: 700;
  font-size: 1rem;
  color: #343949;
`;

const SideNavigation = () => {
  const classes = useStyles();

  return (
    <div>
      <Drawer style={{ backgroundColor: 'blue' }} variant='permanent' open>
        <List>
          <ListItem button>
            <StyledLink to='/admin'>
              <ListItemText primary='Dashboard' />
            </StyledLink>
          </ListItem>
          <ListItem button>
            <StyledLink to='/admin/patients'>
              <ListItemText primary='Manage Patients' />
            </StyledLink>
          </ListItem>
          <ListItem button>
            <StyledLink to='/admin/doctors'>
              <ListItemText primary='Manage Doctors' />
            </StyledLink>
          </ListItem>
          <ListItem button>
            <StyledLink to='/admin/unverified'>
              <ListItemText primary='Unverified' />
            </StyledLink>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </div>
  );
};

export default SideNavigation;
