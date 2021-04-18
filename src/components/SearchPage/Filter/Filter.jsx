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
  const Filters = [
    { filterName: "Location", filterData: ["Any", "Video", "Home", "Clinic"] },
    { filterName: "Gender", filterData: ["Any", "Male", "Female"] },
    { filterName: "Rating", filterData: [1, 2, 3, 4, 5] },
    {
      filterName: "Price",
      filterData: ["Any", "Less than $30", "$30-$50", "Movre than $50"],
    },
    {
      filterName: "open now",
      filterData: ["open now"],
    },
  ];
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

      {Filters.map((Filter) => (
        <SingleFilter SingleFilter={Filter} />
      ))}
    </FilterWraper>
  );
};

export default Filter;
