import React from "react";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  wrapper: {
    textAlign: "center",
    background:
      'url("/assets/Curious/curious-bgg.png") no-repeat center center',
    backgroundSize: "101% 101%",
    padding: "150px 0",
  },
  header: {
    marginBottom: "10px",
  },
  text: {
    marginBottom: "70px",
  },
  icon: {
    background: "white",
    borderRadius: "50%",
  },
  btn: {
    padding: "8px 30px",
    color: "white",
    background: "linear-gradient(135deg,  #2D50EF 0%, #A7BCFB 78.44%)",
  },
});

const Curious = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <h2 className={classes.header}>Curious yet?</h2>
      <p className={classes.text}>
        It only takes a few minutes to get up and start running!
      </p>
      <Button
        className={classes.btn}
        endIcon={<ChevronRightIcon color="primary" className={classes.icon} />}
      >
        get started
      </Button>
    </div>
  );
};

export default Curious;
