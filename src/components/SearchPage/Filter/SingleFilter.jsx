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

const SingleFilter = ({ SingleFilter }) => {
  const { filterName, filterData } = SingleFilter;

  const list = {};
  for (let i = 0; i < filterData.length; i++) {
    list[filterData[i]] = false;
  }

  const [checkedList, setCheckedList] = useState(list);
  console.log("checkedList", checkedList);

  const handleChange = (event) => {
    setCheckedList({
      ...checkedList,
      [event.target.name]: event.target.checked,
    });
    console.log("event", event.target.checked);
  };
  return (
    <>
      <Typography variant="h6" style={FilterNameStyle} gutterBottom>
        {filterName}
      </Typography>
      <CheckBoxWraper>
        {filterData.map((singleF, idx) => (
          <FormControlLabel
            key={idx}
            control={
              <Checkbox
                onChange={handleChange}
                name={singleF}
                color="primary"
              />
            }
            label={singleF}
          />
        ))}

        <HorizontalLine />
      </CheckBoxWraper>
    </>
  );
};

export default SingleFilter;
