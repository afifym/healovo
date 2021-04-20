import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FiUsers } from 'react-icons/fi';
import { FaUserNurse } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import { BsCardList } from 'react-icons/bs';
import { FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Box, Divider, List } from '@material-ui/core';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  font-weight: 700;
  font-size: 1rem;
  color: #343949;
`;

const SideNavigation = () => {
  return (
    <div>
      <div
        style={{
          width: '300px',
          position: 'static',
          backgroundColor: 'white',
          height: '100%',
        }}
      >
        <List>
          <ListItem button>
            <StyledLink to='/admin'>
              <Box display='flex' alignItems='center'>
                <MdDashboard size={20} style={{ margin: '0 1em' }} />
                <ListItemText primary='Dashboard' />
              </Box>
            </StyledLink>
          </ListItem>
          <ListItem button>
            <StyledLink to='/admin/patients'>
              <Box display='flex' alignItems='center'>
                <FiUsers size={20} style={{ margin: '0 1em' }} />
                <ListItemText primary='Manage Patients' />
              </Box>
            </StyledLink>
          </ListItem>
          <ListItem button>
            <StyledLink to='/admin/doctors'>
              <Box display='flex' alignItems='center'>
                <FaUserNurse size={20} style={{ margin: '0 1em' }} />
                <ListItemText primary='Manage Doctors' />
              </Box>
            </StyledLink>
          </ListItem>
          <ListItem button>
            <StyledLink to='/admin/appointments'>
              <Box display='flex' alignItems='center'>
                <BsCardList size={20} style={{ margin: '0 1em' }} />
                <ListItemText primary='Manage Appointments' />
              </Box>
            </StyledLink>
          </ListItem>
          <ListItem button>
            <StyledLink to='/admin/unverified'>
              <Box display='flex' alignItems='center'>
                <FaDownload size={20} style={{ margin: '0 1em' }} />
                <ListItemText primary='Unverified Doctors' />
              </Box>
            </StyledLink>
          </ListItem>
        </List>
        <Divider />
      </div>
    </div>
  );
};

export default SideNavigation;
