import { HeaderContainer } from "./styles";
import {Button} from "@mui/material"
import {LightMode,DarkMode} from '@mui/icons-material';
interface HeaderProps {
  handleThemeChange: () => void;
  darkTheme:boolean
}

export function Header({handleThemeChange,darkTheme}:HeaderProps) {
  return (
    <HeaderContainer>
      <img className="Imagem" src="/images/marvel.svg" />
      <Button size="large" sx={{position: 'absolute', top: 0, right: 0,marginTop:"0.8rem",marginRight:"1rem"}}  variant="contained" onClick={handleThemeChange}>
        {darkTheme?(<DarkMode/>):(<LightMode/>)}
      </Button>
    </HeaderContainer>
  );
}
