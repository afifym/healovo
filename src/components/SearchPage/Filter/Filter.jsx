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

const Filters = [
  {
    filterName: "Location",
    filterData: {
      any: "Any",
      video: "Video",
      home: "Home",
      clinic: "Clinic",
    },
  },
  {
    filterName: "Gender",

    filterData: { any: "Any", male: "Male", female: "Female" },
  },
  {
    filterName: "Rating",
    filterData: {
      any: "Any",
      2: <DoctorRating RatingVal={2} />,
      3: <DoctorRating RatingVal={3} />,
      4: <DoctorRating RatingVal={4} />,
      5: <DoctorRating RatingVal={5} />,
    },
  },
  {
    filterName: "Price",
    filterUiData: ["Any", "Less than $30", "$30-$50", "Movre than $50"],
    filterData: {
      any: "Any",
      "<100": "Less than 100EGP",
      "100-200": "100-200EGP",
      ">200": "More than 200GEP",
    },
  },
];

const Filter = ({ filterSettings, onCheckBoxChange, onClear }) => {
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

        <Button onClick={onClear}>Clear All</Button>
      </FilterHeader>
      <FilterBody>
        {Filters.map((Filter, idx) => {
          return (
            <SingleFilter
              key={idx}
              idx={idx}
              SingleFilter={Filter}
              filterSettings={filterSettings}
              onCheckBoxChange={onCheckBoxChange}
            />
          );
        })}
      </FilterBody>
    </FilterWraper>
  );
};

export default Filter;
