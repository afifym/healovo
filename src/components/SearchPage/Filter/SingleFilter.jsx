import styled from "styled-components";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Box } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";

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

const SingleFilter = ({ SingleFilter }) => {
  const { filterName, filterData } = SingleFilter;
  const CheckboxBg = {
    background: "#fff !important",
  };
  return (
    <>
      <Typography variant="h6" gutterBottom>
        {filterName}
      </Typography>
      <CheckBoxWraper>
        {filterData.map((singleF) => (
          <FormControlLabel
            control={
              <Checkbox name={singleF} style={CheckboxBg} color="primary" />
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
