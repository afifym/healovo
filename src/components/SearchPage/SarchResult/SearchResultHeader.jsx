
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styled from 'styled-components';
const CustomeHeader = styled.header`
display:flex;
align-items: center;
justify-content:space-between;
width:100%
`

const CustomeSelect = styled(Select)`
background: #FFFFFF;
box-shadow: 0px 4px 19px 2px rgba(121, 121, 121, 0.25) !important;
border-radius: 20px !important;
border:none !important;
padding:0px 20px;
fieldset{
    border:none;
}
span{
    font-size:1rem;
    font-weight:bolder;
}
`

const SortBox = styled(Box)`
display:flex;
align-items: center;
span{
    padding-right:15px
}
`

const HorizontalLine = styled.div`
width:100%;
height:2px;
background: #E5E5E5;
margin:20px 0;
`

const SearchResultHeader = () => {
    return (
        <>
            <CustomeHeader>
                <Typography variant="h6" component="h6" gutterBottom>
                    205 result
            </Typography>
                <SortBox component="div" >
                    <Typography variant="span" component="span" gutterBottom>
                        Sort By
            </Typography>
                    <FormControl variant="outlined" >
                        <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
                        <CustomeSelect
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"

                            label="Age"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </CustomeSelect>
                    </FormControl>
                </SortBox>

            </CustomeHeader>
            <HorizontalLine />
        </>
    );
}

export default SearchResultHeader;