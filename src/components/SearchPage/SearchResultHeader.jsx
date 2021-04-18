import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import styled from "styled-components";
const CustomeHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-top: 20px;
  @media (max-width: 959px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const CustomeSelect = styled(Select)`
  background: #ffffff;
  box-shadow: 0px 4px 19px 2px rgba(121, 121, 121, 0.25) !important;
  border-radius: 20px !important;
  border: none !important;
  padding: 0px 20px;
  fieldset {
    border: none;
  }
  span {
    font-size: 1rem;
    font-weight: bolder;
  }
`;

const SortBox = styled(Box)`
  display: flex;
  align-items: center;
  span {
    padding-right: 15px;
  }
`;

const HorizontalLine = styled.div`
  width: 100%;
  height: 2px;
  background: #e5e5e5;
  margin: 20px 0;
`;

const SearchResultHeader = ({ searchResultNumber }) => {
  return (
    <>
      <CustomeHeader>
        <Typography variant="h6" component="h6" style={{ fontWeight: 700 }}>
          {searchResultNumber} result
        </Typography>
        <SortBox component="div">
          <Typography variant="span" component="span">
            Sort By
          </Typography>
          <FormControl variant="outlined">
            <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
            <CustomeSelect
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </CustomeSelect>
          </FormControl>
        </SortBox>
      </CustomeHeader>
      <HorizontalLine />
    </>
  );
};

export default SearchResultHeader;
