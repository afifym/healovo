import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import DehazeIcon from "@material-ui/icons/Dehaze";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
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
        console.log("signed out");
        dispatch(authActions.logout());
      })
      .catch((error) => console.log(error));
  };

  return (
    <Wrapper>
      <div style={{ width: "120px" }}>
        <img
          src="assets/Navbar/logo.png"
          alt="Healovo Logo"
          style={{ width: "100%" }}
        />
      </div>

      <Icon onClick={() => setOpen(!open)}>
        <DehazeIcon />
      </Icon>

      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <SendIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Sent mail" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </StyledMenuItem>
        <StyledMenuItem onClick={signOut}>
          <ListItemIcon>
            <InboxIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Signout" />
        </StyledMenuItem>
      </StyledMenu>

      <Links open={open}>
        <LinkWrapper>
          <Link>Dashboard</Link>
          <Link>Search</Link>
          <Link>Contact</Link>
        </LinkWrapper>
        <Avatar>
          <img src={img} alt="avatar" onClick={handleClick} className="img" />
        </Avatar>
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
  margin-bottom: 100px;
  padding: 0 4.375rem;
  color: #000000;
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
    display: ${({ open }) => (open ? "flex" : "none")};
  }
`;

const Link = styled.a`
  padding: 1.25rem 0.938rem;
  margin-left: 1.563rem;
  font-weight: 500;
  font-size: 1.25rem;
  color: #343949;
  cursor: pointer;
  transition: all 0.3s ease-in;

  &:hover {
    color: #2d50ef;
  }

  &:after {
    content: "";
    display: block;
    width: 0;
    border-bottom: 0.125rem solid #2d50ef;
    margin-top: 0.313rem;
    transition: all 0.4s ease-in-out;
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

  .img {
    border-radius: 50%;
  }
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
