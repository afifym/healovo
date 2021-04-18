import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";

const CustomeSelectWraper = styled.div`
position:relative;

max-width:500px;
width:75%;
top:0;
left:0;

@media (max-width: 450px) {
    width:95%;      
}
select{
    box-sizing border-box;
    width: 100%;
    height: 50px;
  
    padding: 0 13% ;
    appearance: none;
    
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
.InputIcon{
    position: absolute;
    top:52%;
    transform translate(0,-50%);
    left:6%;
    z-index:50;
}

.arrowIcon{
    position: absolute;
    top:55%;
    transform translate(0,-50%);
    right:3%;
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

const CustomeSelectInput = ({ SelectIconName, selectData }) => {
  return (
    <CustomeSelectWraper>
      <label className="InputIcon" htmlFor="">
        <SelectIconName color={"#2D50EF"} />
      </label>
      <select>
        {selectData.map((option) => (
          <option>{option}</option>
        ))}
      </select>
      <label className="arrowIcon" htmlFor="">
        <IoIosArrowDown size={20} color={"#2D50EF"} />
      </label>

      <div className="HorizontalLine" />
    </CustomeSelectWraper>
  );
};

export default CustomeSelectInput;
