import { HeaderContainer } from "./styles";
// import { Typography } from "@mui/material";
export function Header() {
  return (
    <HeaderContainer>
      <img className="Imagem" src="/images/marvel.svg" />
      {/* <Typography sx={{paddingY:1}} variant="h2">Herói</Typography> */}
    </HeaderContainer>
  );
}
