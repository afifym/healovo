import { Grid } from "@material-ui/core";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import SingleFilter from "./SingleFilter";
import Typography from "@material-ui/core/Typography";
import DoctorRating from "../DoctorRating";

const FilterHeader = styled.header`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const FilterWraper = styled.div`
  padding: 0 20px;
  padding-top: 29px;
`;

const FilterBody = styled.div`
  padding-top: 20px;
`;

const Filter = () => {
  const Filters = [
    { filterName: "Location", filterData: ["Any", "Video", "Home", "Clinic"] },
    { filterName: "Gender", filterData: ["Any", "Male", "Female"] },
    {
      filterName: "Rating",
      filterData: [
        <DoctorRating RatingVal={1} />,
        <DoctorRating RatingVal={2} />,
        <DoctorRating RatingVal={3} />,
        <DoctorRating RatingVal={4} />,
        <DoctorRating RatingVal={5} />,
      ],
    },
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
      <FilterBody>
        {Filters.map((Filter) => (
          <SingleFilter SingleFilter={Filter} />
        ))}
      </FilterBody>
    </FilterWraper>
  );
};

export default Filter;
