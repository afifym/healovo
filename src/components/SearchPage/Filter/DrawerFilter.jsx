import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

import Filter from "./Filter";

import Fab from "@material-ui/core/Fab";
import styled from "styled-components";
import { FaFilter } from "react-icons/fa";

const CustomeFab = styled(Fab)`
  position: fixed;
  bottom: 15px;
  left: 15px;
`;

const useStyles = makeStyles({
  list: {
    width: 250,
    paddingTop: 20,
  },
  fullList: {
    width: "auto",
  },
});

const DrawerFilter = ({ filterSettings, onCheckBoxChange, onClear }) => {
  const classes = useStyles();
  const [state, setState] = React.useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      <>
        <CustomeFab
          onClick={toggleDrawer("left", true)}
          color="primary"
          aria-label="add"
        >
          <FaFilter />
        </CustomeFab>

        <Drawer open={state["left"]} onClose={toggleDrawer("left", false)}>
          <div
            className={`left ${classes.list}`}
            role="presentation"
            onClick={toggleDrawer("left", true)}
            onKeyDown={toggleDrawer("left", false)}
          >
            <Filter
              onClear={onClear}
              filterSettings={filterSettings}
              onCheckBoxChange={onCheckBoxChange}
            />
          </div>
        </Drawer>
      </>
    </div>
  );
};

export default DrawerFilter;
