import styled from "styled-components";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Box } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";

const CheckBoxWraper = styled.div`
  display: flex;
  flex-direction: column;
`;
const HorizontalLine = styled.div`
  width: 100%;
  height: 2px;
  background: #e5e5e5;
  margin: 20px 0;
`;

const FilterNameStyle = {
  fontWeight: "700 ",
};

const SingleFilter = ({ SingleFilter, filterSettings, idx }) => {
  const { filterName, filterData } = SingleFilter;

  const UI = (data) => {
    const ulList = [];
    let counter = 0;
    console.log();
    for (const singleFilter in data) {
      //  'filterSettings[counter++]["filterData"][singleFilter]',
      console.log("singleFilter", singleFilter);
      console.log(
        "filterSettings[counter++]",
        filterSettings[idx]["filterData"][`${singleFilter}`]
      );

      ulList.push(
        <FormControlLabel
          control={
            <Checkbox
              checked={filterSettings[idx]["filterData"][`${singleFilter}`]}
              color="primary"
            />
          }
          label={data[singleFilter]}
        />
      );
    }

    return ulList;
  };

  return (
    <>
      <Typography variant="h6" style={FilterNameStyle} gutterBottom>
        {filterName}
      </Typography>
      <CheckBoxWraper>
        {UI(filterData)}
        <HorizontalLine />
      </CheckBoxWraper>
    </>
  );
};

export default SingleFilter;
