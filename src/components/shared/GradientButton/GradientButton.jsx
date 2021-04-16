import { StyledButton } from "../../../styles/shared";
import React from "react";

const GradientButton = ({ width, lightCircle, blueBg, icon, children }) => {
  return (
    <StyledButton
      width={width}
      lightCircle={lightCircle}
      blueBg={blueBg}
      size="large"
      endIcon={icon}
      variant="contained"
    >
      {children}
    </StyledButton>
  );
};

export default GradientButton;

// usage examples

// White Background
// <GradientButton
//   width='210px'
//   icon={<FaSearch color='#ffffff' size={15} />}
// >
//   Healovo
// </GradientButton>;

// Blue Background
// <GradientButton
//   width='210px'
//   lightCircle
//   blueBg
//   icon={<FaSearch color='#hsl(229, 86%, 56%)' size={15} />}
// >
//   Book Now
// </GradientButton>;
