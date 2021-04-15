import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import styled from 'styled-components';
import CustomeSearchInput from './CustomeSearchInput';

const SearchBarWraper = styled.div`
    display:flex;
    justify-content:center;
    align-items :center; 
    flex-direction column 

  
    
`



const SearchTabBtn = styled(Button)`

background: #FFFFFF !important;
box-shadow: 0px 4px 4px rgba(156, 156, 156, 0.25) !important;

color:black !important;
font-family: Montserrat;
font-style: normal !important;
font-weight: bold !important;
font-size: 16px !important;
line-height: 30px !important;
text-transform:capitalize !important ;
`
const CustomeButtonGroup = styled(ButtonGroup)`
 border-radius: 100px !important;
  overflow: hidden !important;
  margin-bottom:20px;
`


const SearchBar = () => {
    return (
        <SearchBarWraper>

            <CustomeButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                <SearchTabBtn>Name</SearchTabBtn>
                <SearchTabBtn>Specialty</SearchTabBtn>
                <SearchTabBtn>City</SearchTabBtn>
            </CustomeButtonGroup>

            <CustomeSearchInput />
        </SearchBarWraper >)
}

export default SearchBar;