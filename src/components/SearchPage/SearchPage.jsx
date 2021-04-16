import { Box, Grid } from "@material-ui/core";
import Filter from "./Filter/Filter";
import SearchBar from "./SearchBar";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";
import SearchResult from "./SarchResult/SearchResult";
import SearchCard from "../SearchCard/SearchCard";

const SearchPage = () => {
  return (
    <div style={{ background: "#E5E5E5" }}>
      <Container Container style={{ paddingTop: 120 }}>
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
            <SearchResult />
            <SearchCard />
            <SearchCard />
            <SearchCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default SearchPage;
