import { Grid } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import DoctorViewCard from "./doctorViewCard/DoctorViewCard";
import TextField from "@material-ui/core/TextField";
import GradientButton from "./../shared/GradientButton/GradientButton";
import { FaSearch } from "react-icons/fa";
const ViewProfilePage = ({ doctor }) => {
  return (
    <Container maxWidth="md">
      <Grid container>
        <Grid
          item
          md={6}
          xs={12}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <DoctorViewCard doctor={doctor} />
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <TextField
            fullWidth
            required
            id="outlined-required"
            label="type"
            variant="outlined"
            style={{ maxWidth: 430 }}
          />
          <TextField
            fullWidth
            id="outlined-required"
            label="data"
            variant="outlined"
            style={{ margin: "50px 0", maxWidth: 430 }}
          />
          <GradientButton
            width="210px"
            lightCircle
            blueBg
            icon={<FaSearch color="#hsl(229, 86%, 56%)" size={15} />}
          >
            Book Now
          </GradientButton>
          ;
        </Grid>
      </Grid>
    </Container>
  );
};

export default ViewProfilePage;
