import React from "react";
import { AppBar, Box, Link, Toolbar, Typography, useTheme } from "@mui/material";

export const Topbar = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        flexGrow: 1,
        boxShadow: "0.5px 2px 2px black",        
      }}
    >
      <AppBar
        position="static"
        sx={{ background: theme.palette.primary.main}}
      >
        <Toolbar>
          <Typography
            variant="h3"
            component="div"
            fontFamily="Bebas Neue, sans-serif"
            color="secondary"
            sx={{
              flexGrow: 1,
              textAlign: "center",
              textDecoration: "none",
            }}
          >
            <Link color="secondary" underline="hover" href="/">Marvel</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
