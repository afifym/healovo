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

const defaultFilterSetting =[
  { filterName: "Location", filterData: ["Any"] },

  { filterName: "Gender", filterData:"Any" },

  {filterName: "Rating", filterData: ['Any']},

  { filterName: "Price", filterData: ["Any"]},

 
  ]

const SearchPage = () => {
  console.log("Doctors", DoctorsData);
  const [doctors, setdoctors] = useState(DoctorsData);
  const [doctorsFilter , setDoctorsFilter] = useState()
  const [filterSttings,setFilterSttings] = useState(defaultFilterSetting)


  
  return (
    <div style={{ background: "#F1F2F4" }}>
      <Container style={{ padding: "100px 0 50px 0" }}>
        <SearchBar />

        <Grid container>
          <Hidden smDown>
            <Grid item md={3}>
              <Box pr={5}>
                <Filter />
              </Box>
            </Grid>
          </Hidden>

          <Grid item xs={12} md={9}>
            <SearchResultHeader searchResultNumber={doctors.length} />
            {doctors.map((doctor, idx) => (
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
