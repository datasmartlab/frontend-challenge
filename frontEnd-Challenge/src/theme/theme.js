import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#af1f24",
    },
    secondary: {
      main: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Bebas Neue, sans-serif",
    fontSize: 20,
    h3: {
      fontWeight: 700,
      fontSize: "4rem",
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.75rem",
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
  },
  CardMedia: {
    '& img': {
        transition: 'transform 0.3s ease', // Smooth transition on hover
      },
      '&:hover img': {
        transform: 'scale(1.1)', // Scale the image on hover (adjust as needed)
      },
  },
  breakpoints: {
    values: {
      xs: 400, // Extra small 
      sm: 600, // Small devices 
      md: 960, // Medium devices 
      lg: 1280, // Large devices 
      xl: 1920, // Extra large devices 
    },
  },
});
