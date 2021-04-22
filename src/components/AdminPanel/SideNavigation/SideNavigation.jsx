import React, { useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FiUsers } from 'react-icons/fi';
import { FaUserNurse } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import { BsCardList } from 'react-icons/bs';
import { FaDownload } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import { Box, Divider, List } from '@material-ui/core';
import styled from 'styled-components';
import { HiLogin } from 'react-icons/hi';
import { useAuth } from '../../../contexts/AuthContext';

const StyledLink = styled(Link)`
  font-weight: 700;
  font-size: 1rem;
  width: 100%;
  color: ${({ theme }) => theme.colors.light1};
`;
const Wrapper = styled.div`
  position: fixed;
  width: 300px;
  background-color: ${({ theme }) => theme.colors.dark1};
  height: 100vh;
`;
const SideNavigation = () => {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState('');
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await logout();
      history.push('/admin-login');
    } catch (error) {
      setError('Failed to logout');
    }
  };

  return (
    <Wrapper>
      <List>
        <ListItem button>
          <StyledLink to='/'>
            <Box
              display='flex'
              alignItems='center'
              my={2}
              justifyContent='center'
            >
              <img
                src='/assets/images/healovo-white.svg'
                alt='logo'
                style={{ width: '70%' }}
              />
            </Box>
          </StyledLink>
        </ListItem>

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
        <ListItem style={{ color: 'white' }} button onClick={handleLogout}>
          <Box display='flex' alignItems='center'>
            <HiLogin size={20} style={{ margin: '0 1em' }} />
            <ListItemText primary='Logout' />
          </Box>
        </ListItem>
      </List>
      <Divider />
    </Wrapper>
  );
};

export default SideNavigation;
