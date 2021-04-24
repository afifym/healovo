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
        background:white;
        box-shadow: 0px 4px 19px 2px rgba(121, 121, 121, 0.25);
        border-radius: 27px !important;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
   
    line-height: 33px;
    border:none;
    }
   
  .Mui-selected{
    background: #2D50EF;
    box-shadow: 0px 4px 19px 2px rgba(121, 121, 121, 0.25);
    border-radius: 27px;
    color:white;
  }

}

  }
`;
const PaginationSearch = ({ onHandlePageView, page, NumberOfPages }) => {
  const classes = useStyles();

  return (
    <CustomePagination className={classes.root}>
      <Pagination
        color="secondary"
        count={NumberOfPages}
        page={page || 1}
        onChange={onHandlePageView}
      />
    </CustomePagination>
  );
};

export default PaginationSearch;
