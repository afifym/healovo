import { StyledButton } from '../../../styles/shared';
import React from 'react';

const GradientButton = ({ width, switchcolors, icon, children }) => {
  return (
    <StyledButton
      width={width}
      switchcolors={switchcolors ? 1 : 0}
      size='large'
      endIcon={icon}
      variant='contained'
    >
      {children}
    </StyledButton>
  );
};

export default GradientButton;

// usage examples

// <GradientButton
//   width='210px'
//   icon={<FaSearch color='#ffffff' size={15} />}
// >
//   Healovo
// </GradientButton>

// <GradientButton
//   width='210px'
//   icon={<FaSearch color='#ffffff' size={15} />}
//   switchcolors
// >
//   Healovo
// </GradientButton>
