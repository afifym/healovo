
import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import SingleFilter from './SingleFilter';


const FilterHeader = styled.header`
width:100%;

    display:flex;
    justify-content:space-between;
    align-items:center;
`
const Filter = () => {
    return (
        <>
            <FilterHeader>
                <h6>Filter by</h6>

                <Button>Clear All</Button>
            </FilterHeader>

            <SingleFilter />
            <SingleFilter />
            <SingleFilter />
        </>);
}

export default Filter;