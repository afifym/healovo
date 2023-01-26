import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const Wrapper = styled.div`
  width: 20%;
  height: 100%;
  background-color: #b0d0cb;
`;

const ChatTray = () => {
  return (
    <Wrapper className=''>
      <Typography
        style={{ textAlign: 'center', margin: '1em 0', fontWeight: '700' }}
        variant='h5'
        color='secondary'
      >
        Connections
      </Typography>
      <List component='nav' aria-label='main mailbox folders'>
        <ListItem button>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary='User1' />
        </ListItem>
        <ListItem button>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary='User2' />
        </ListItem>
      </List>
      <Divider />
    </Wrapper>
  );
};

export default ChatTray;
