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

const SingleFilter = () => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        h5. Heading
      </Typography>
      <CheckBoxWraper>
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Any"
        />

        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Vedio"
        />

        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Home"
        />

        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Clinc"
        />

        <HorizontalLine />
      </CheckBoxWraper>
    </>
  );
};

export default SingleFilter;
