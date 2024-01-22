"use client";
import * as React from "react";
import Image from 'next/image';

import Link from "next/link";


import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import shield from '../../Assets/svg/icons8-capitão-américa-80.svg';

const pages = ["Heroes"];

export function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={{
      position:{
        md: 'fixed',
        xs: 'static',
      }
    }} style={{borderRadius: '10px',background:'rgba( 255, 255, 255, 0.35 )',backdropFilter: 'blur( 13.5px )'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
               <Link key={page} href="/" style={{textDecoration: "none",display: 'flex',alignItems:"center"}}>
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block",":hover":{color: 'white'}}}
              >
                {page}
              </Button>
              </Link>
            ))}
          </Box>
             <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="default"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page,index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                   <Link href="/" style={{textDecoration: "none",display: 'flex',alignItems:"center"}}>
                  <Typography textAlign="center" color={"black"}>{page}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        <Box alignItems={'center'} position="relative"  sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <Link href="/" style={{textDecoration: "none",display: 'flex',alignItems:"center"}}>
            <Typography
            align="center"
            variant='h5'
            color="white"
            >
                Marvel
            </Typography>
          <Image 
           priority
           src={shield}
           alt="Escudo do capitão america"
           height={40}
           style={{margin: '0px 10px'}}
           />
          </Link>
          </Box>

         
          <Box alignItems={"center"} sx={{ flexGrow: 2, display: { xs: "flex", md: "none" } }}>
          <Link href="/" style={{textDecoration: "none",display: 'flex',alignItems:"center"}}>
          <Image 
           priority
           src={shield}
           alt="Escudo do capitão america"
           height={40}
           style={{margin: '0px 10px'}}
           />
           <Typography
            align="center"
            variant='h5'
            color="black"
            >
                Marvel
            </Typography>
            </Link>
          </Box>
         
         
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
