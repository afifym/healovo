import { Box, Grid } from "@material-ui/core";
import Filter from "./Filter/Filter";
import SearchBar from "./SearchBar";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";

import SearchCard from "./SearchCard/SearchCard";
import PaginationSearch from "./PaginationSearch";

import DrawerFilter from "./Filter/DrawerFilter";
import { useState } from "react";
import { DoctorsData } from "../../DoctorsData";
import SearchResultHeader from "./SearchResultHeader";

const defaultFilterSetting = [
  {
    filterName: "Location",
    filterData: {
      any: true,
      video: false,
      home: false,
      clinic: false,
    },
  },

  {
    filterName: "Gender",
    filterData: { any: true, male: false, female: false },
  },
  {
    filterName: "Rating",
    filterData: { any: true, 2: false, 3: false, 4: false, 5: false },
  },
  {
    filterName: "Price",
    filterData: {
      any: true,
      "Less than $30": false,
      "$30-$50": false,
      "More than $50": false,
    },
  },
  {
    filterName: "open now",
    filterData: { "open now": false },
  },
];

const SearchPage = () => {
  const [doctors, setdoctors] = useState(DoctorsData);
  const [doctorsFilter, setDoctorsFilter] = useState(doctors);
  const [filterSettings, setFilterSettings] = useState(defaultFilterSetting);

  const handleCheckBoxChange = (event, idx, propsfilterName) => {
    const filterSettingCopy = JSON.parse(JSON.stringify(filterSettings));
    filterSettingCopy[idx]["filterData"] = {
      ...filterSettingCopy[idx]["filterData"],
      [event.target.name]: event.target.checked,
    };
    console.log(filterSettingCopy[idx]);
    setFilterSettings(filterSettingCopy);
    console.log("filterSettingCopy", filterSettingCopy);
    console.log("filterSettings", filterSettings);
    console.log(
      'filterSettings[idx]["filterData"]`]',
      filterSettings[idx]["filterData"]
    );

    /*


    
    
      setFilterSettings({
      ...filterSettings,
      [filterSettings[idx]["filterData"][`${event.target.name}`]]:
        event.target.checked,
    }); */
    //event.target.checked
    /*
    console.log("idx", idx);
    const like = [
      ...filterSettings,
      {
        filterName: propsfilterName,
        filterData: {
          ...filterSettings[idx]["filterData"],
        },
      },
    ];
    console.log("like", like);
    setFilterSettings(like);
    
    */
  };
  /*
    const handleCheckBoxChange = (event,idx, singleFilter, event) => {
    setFilterSettings({
      ...state,
      [filterSettings[idx]["filterData"][`${event.target.name}`]]: checked,
    });
  };
   */
  return (
    <div style={{ background: "#F1F2F4" }}>
      <Container style={{ padding: "100px 0 50px 0" }}>
        <SearchBar />

        <Grid container>
          <Hidden smDown>
            <Grid item md={3}>
              <Box pr={5}>
                <Filter
                  filterSettings={filterSettings}
                  onCheckBoxChange={handleCheckBoxChange}
                />
              </Box>
            </Grid>
          </Hidden>

          <Grid item xs={12} md={9}>
            <SearchResultHeader searchResultNumber={doctorsFilter.length} />
            {doctorsFilter.map((doctor, idx) => (
              <SearchCard key={idx} Doctor={doctor} />
            ))}

            <PaginationSearch />
          </Grid>
        </Grid>
      </Container>
      <Hidden mdUp>
        <DrawerFilter />
      </Hidden>
    </div>
  );
};

export default SearchPage;
