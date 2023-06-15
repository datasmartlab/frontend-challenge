import { styled } from "@mui/system";
import { Grid, Typography } from "@mui/material";

export const MyGrid = styled(Grid)({
  ":hover": { filter: "blur(1.5px) brightness(0.4)", transition: "200ms" },
});

export const MyTypography = styled(Typography)({
  textShadow: "2px 2px red",
  position: "absolute",
  top: "55%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "white",
  opacity: 0,
  width: "100%",
  height: "100%",
  textAlign: "center",
});
