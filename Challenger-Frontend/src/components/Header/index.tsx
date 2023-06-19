import {Box, Button} from "@mui/material"
import {LightMode,DarkMode} from '@mui/icons-material';
interface HeaderProps {
  handleThemeChange: () => void;
  darkTheme:boolean
}

export function Header({handleThemeChange,darkTheme}:HeaderProps) {
  return (
    <Box sx={{textAlign:'center',justifyContent:'center',backgroundColor:'#f0141e',color:'#fff'}}>
      <Box component='img' src="/images/marvel.svg" sx={{width:'10rem'}} />
      <Button size="large" sx={{position: 'absolute', top: 0, right: 0,marginTop:"0.8rem",marginRight:"1rem"}}  variant="contained" onClick={handleThemeChange}>
        {darkTheme?(<DarkMode/>):(<LightMode/>)}
      </Button>
    </Box>
  );
}
