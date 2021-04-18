import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import { useState } from "react";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const DoctorRating = ({ RatingVal }) => {
  const [value, setValue] = useState(RatingVal);

  return (
    <div>
      <Box component="fieldset" borderColor="transparent">
        <Grid container alignItems="center">
          <Rating name="read-only" value={value} readOnly />
          <Typography
            component="span"
            style={{
              fontSize: "15px",
              paddingLeft: 5,
            }}
          >
            {`(${RatingVal})`}
          </Typography>
        </Grid>
      </Box>
    </div>
  );
};
export default DoctorRating;
