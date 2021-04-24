import { AiFillAccountBook } from "react-icons/ai";
import styled from "styled-components";
import { FaSignature } from "react-icons/fa";

const CustomeSaerch = styled.div`
position:relative;

max-width:500px;
width:75%;
top:0;
left:0;

@media (max-width: 450px) {
    width:95%;      
}
input{
    box-sizing border-box;
    width: 100%;
    height: 50px;
  
    padding-left:13%;
    
    background: #FFFFFF;
    box-shadow: 0px 4px 19px 2px rgba(121, 121, 121, 0.25);
    border-radius: 36px;
    outline:none;
    font-size:1.1rem;
    border:none;
    @media (max-width: 400px) {
        padding-left:17%;
      }

}
label{
    position: absolute;
    top:50%;
    transform translate(0,-50%);
    left:6%;
    z-index:50;
}
.HorizontalLine{
    position:absolute;
    width:80%;
    bottom:-1%;
    left:50%;
    transform translate(-50%,-50%);
    height:1px;
    z-index:50;
    background: #2D50EF;

    border-color:#2D50EF;
  
}
`;

const CustomeSearchInput = ({ onSerachByName, searchByName }) => {
  return (
    <CustomeSaerch>
      <label htmlFor="">
        <FaSignature color="#2D50EF" />
      </label>
      <input
        type="text"
        placeholder="eg.John"
        value={searchByName}
        onChange={(event) => onSerachByName(event)}
      />
      <div className="HorizontalLine" />
    </CustomeSaerch>
  );
};

export default CustomeSearchInput;
