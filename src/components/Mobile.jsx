import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AndroidIcon from "@material-ui/icons/Android";
import AppleIcon from "@material-ui/icons/Apple";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  wrapper: {
    position: "relative",
    height: "100vh",
    //  pic to svg
    background: "url(/assets/Footer/hand.png) left bottom no-repeat",
    backgroundSize: "100vh",
  },
  innerWrapper: {
    display: "flex",
    justifyContent: "space-between",
    padding: "150px",
    height: "100vh",
  },
  btnWrapper: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "flex-end",
  },
  btn: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "20px",
    width: "250px",
    maxWidth: "400px",
    padding: "15px 40px 15px 30px",
    marginBottom: "25px",
    transition: "all 0.3s ease",

    "&:hover": {
      boxShadow: "0px 15px 20px rgba(46, 229, 157, 0.4)",
      transform: " translateY(-7px)",
    },
  },
  text: {
    alignSelf: "flex-start",
    margin: "0 auto",
    width: "36px",
    backgroundColor: "blue",
    fontWeight: "600",
    fontSize: "36px",
    lineHeight: "1.5",
    paddingLeft: "10px",
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.innerWrapper}>
        <p className={classes.text}>Download Our App</p>

        <div className={classes.btnWrapper}>
          <Button
            color="primary"
            startIcon={<AndroidIcon />}
            className={classes.btn}
          >
            For Andriod
          </Button>

          <Button
            color="primary"
            startIcon={<AppleIcon />}
            className={classes.btn}
          >
            For IOS
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
