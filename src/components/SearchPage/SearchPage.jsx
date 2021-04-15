import { Grid } from '@material-ui/core';
import Filter from './Filter/Filter';
import SearchBar from './SearchBar';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import SearchResult from './SarchResult/SearchResult';
import SearchCard from '../SearchCard/SearchCard';


const SearchPage = () => {

    return (
        < Container Container>
            <SearchBar />
            <Grid container>

                <Hidden smDown>
                    <Grid item md={3}>
                        <Filter />
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
    );
}

export default SearchPage;