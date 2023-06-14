// export const HomeContainer = styled.div`
// `;

import { styled } from '@mui/system';
import {Grid,Typography} from '@mui/material';

export const MyGrid = styled(Grid)({
  ":hover":{filter:'blur(1.5px) brightness(0.4)','transition':'200ms'}
});

export const MyTypography = styled(Typography)({
  textShadow:'1.5px 1.5px red',
  position:'absolute',
  display:'block',
  width:'100%',
  height:'100%',
  color:'white',
  flexDirection:'column',
  paddingLeft:0.4,
  paddingTop:0.5,
  opacity:0,
  breakAfter:'auto',
  ":hover":{
      opacity: 1,
  }
});