import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";

export const HeroGridBox = styled(Box)({
  position: "relative",
  ":hover .imagem": {
    filter: "blur(1px) brightness(0.3)",
    transform: "scale(1.15)",
    transition: "300ms",
    },
  ":hover .HeroBoxTypography": {
    opacity: 1,
  },
});

export const HeroBoxTypography = styled(Typography)({
  paddingTop:"20%",
  textShadow: "2px 2px red",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "white",
  opacity: 0,
  width: "100%",
  height: "100%",
  textAlign: "center",
});
