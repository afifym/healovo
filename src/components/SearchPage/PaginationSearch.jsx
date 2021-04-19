import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import styled from "styled-components";
import style from "styled-components";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const CustomePagination = style.div`
.MuiPagination-ul {

    justify-content:center;
    li{
       

    button{
        background: #FFFFFF;
        box-shadow: 0px 4px 19px 2px rgba(121, 121, 121, 0.25);
        border-radius: 27px !important;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
   
    line-height: 33px;
    border:none;
    }
}

  }
`;
const PaginationSearch = () => {
  const classes = useStyles();

  return (
    <CustomePagination className={classes.root}>
      <Pagination
        count={10}
        variant="outlined"
        boundaryCount={1}
        siblingCount={0}
        defaultPage={1}
      />
    </CustomePagination>
  );
};

export default PaginationSearch;
