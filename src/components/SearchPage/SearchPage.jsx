import { Grid } from '@material-ui/core';
import Filter from './Filter/Filter';
import SearchBar from './SearchBar';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';


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

                <Grid item md={9}>
                    thanx
                </Grid>
            </Grid>
        </Container>
    );
}

export default SearchPage;