import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import DehazeIcon from '@material-ui/icons/Dehaze';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import firebase from 'firebase';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store/auth';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const DashboardNav = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const isDoctor = useSelector((state) => state.auth.isDoctor);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const patientImg = useSelector((state) => state.patient.image);
  const doctorImg = useSelector((state) => state.doctor.image);
  const hisory = useHistory();
  let img = null;

  if (isDoctor) {
    img = doctorImg;
  } else {
    img = patientImg;
  }

  useEffect(() => {}, [isAuth]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log('signed out');
        dispatch(authActions.logout());
        hisory.push('/');
      })
      .catch((error) => console.log(error));
  };

  return (
    <Wrapper>
      <div style={{ width: '170px' }}>
        <Link to='/'>
          <img
            src='assets/images/healovo-black.svg'
            alt='Healovo Logo'
            style={{ width: '100%' }}
          />
        </Link>
      </div>

      <Icon onClick={() => setOpen(!open)}>
        <DehazeIcon />
      </Icon>

      <StyledMenu
        id='customized-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <SendIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText primary='Sent mail' />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <DraftsIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText primary='Drafts' />
        </StyledMenuItem>
        <StyledMenuItem onClick={signOut}>
          <ListItemIcon>
            <InboxIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText primary='Signout' />
        </StyledMenuItem>
      </StyledMenu>

      <Links open={open}>
        <LinkWrapper>
          <StyledLink to='/dashboard'>Dashboard</StyledLink>
          <StyledLink to='/search'>Find a Doctor</StyledLink>
          <StyledLink to='/contact-us'>Contact</StyledLink>
          <StyledLink to='/chat'>Chat</StyledLink>
        </LinkWrapper>
        <div
          style={{
            backgroundColor: 'hsl(229, 86%, 56%)',
            width: '60px',
            padding: '0.2em',
            borderRadius: '50%',
            cursor: 'pointer',
          }}
        >
          <img
            src={img}
            style={{ borderRadius: '50%' }}
            alt='avatar'
            onClick={handleClick}
            className='img'
          />
        </div>
      </Links>
    </Wrapper>
  );
};

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

const Wrapper = styled.div`
  margin-bottom: 3em;
  padding: 1em 4em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  @media (max-width: 850px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    display: ${({ open }) => (open ? 'flex' : 'none')};
  }
`;

const StyledLink = styled(Link)`
  padding: 1.25rem 0.938rem;
  margin-right: 2em;
  font-weight: 700;
  font-size: 1rem;
  color: #343949;
  cursor: pointer;
  transition: all 0.1s linear;

  &:hover {
    color: #2d50ef;
  }

  &:after {
    content: '';
    display: block;
    width: 0;
    border-bottom: 0.15rem solid #2d50ef;
    margin-top: 0.313rem;
    transition: all 0.2s linear;
  }

  &:hover::after {
    width: 50%;
  }
`;

const Avatar = styled.button`
  width: 60px;
  border-radius: 50%;
  border: none;
  margin-left: 20px;
  cursor: pointer;
`;

const Icon = styled.div`
  display: none;
  cursor: pointer;
  padding: 1.563rem 0;

  @media (max-width: 850px) {
    display: flex;
  }
`;

export default DashboardNav;
