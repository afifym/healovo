import { Box, Grid } from "@material-ui/core";
import Filter from "./Filter/Filter";
import SearchBar from "./SearchBar";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";

import SearchCard from "../SearchCard/SearchCard";
import PaginationSearch from "./PaginationSearch";

import DrawerFilter from "./Filter/DrawerFilter";
import { useState } from "react";
import { DoctorsData } from "../../DoctorsData";
import SearchResultHeader from "./SearchResultHeader";

const SearchPage = () => {
  console.log("Doctors", DoctorsData);
  const [Doctors, useDoctors] = useState(DoctorsData);
  return (
    <div style={{ background: "#F1F2F4" }}>
      <Container Container style={{ padding: "100px 0 50px 0" }}>
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
            <SearchResultHeader searchResultNumber={Doctors.length} />
            {Doctors.map((Doctor) => (
              <SearchCard Doctor={Doctor} />
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
