import { Grid } from "@material-ui/core";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import SingleFilter from "./SingleFilter";
import Typography from "@material-ui/core/Typography";

const FilterHeader = styled.header`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const FilterWraper = styled.div`
  padding: 0 20px;
`;
const Filter = () => {
  return (
    <FilterWraper>
      <FilterHeader>
        <Typography
          style={{ fontWeight: "700" }}
          variant="h6"
          component="h2"
          gutterBottom
        >
          Filter By
        </Typography>

        <Button>Clear All</Button>
      </FilterHeader>

      <SingleFilter />
      <SingleFilter />
      <SingleFilter />
    </FilterWraper>
  );
};

export default Filter;
