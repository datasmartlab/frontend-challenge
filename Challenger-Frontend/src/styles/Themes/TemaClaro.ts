import { createTheme } from "@mui/material/styles";
import { lightBlue, grey,red } from "@mui/material/colors";

const temaClaro = createTheme({
  palette: {
    info:{
      main:grey["A700"],
      light:grey[900]
    },
    primary: {
      main: grey[200],//cor do container
      dark: grey[50],
      contrastText: red["A700"],
      
    },
    error:{
      main:red["A700"]
    },
    secondary:{
      main:lightBlue["A700"]
    }
  },
  components: {
    MuiPagination: {
      styleOverrides: {
        root: {
          "& .MuiPaginationItem-root": {
            color: lightBlue["A700"],
            backgroundColor: grey[50],
              "&:hover":{
                color: grey[50],
                backgroundColor: grey[500],
            },
            "&.MuiPaginationItem-ellipsis": {
              background: "none",
              color: lightBlue["A700"],
              
            },
            
          },
          ul: {
            "& .Mui-selected ": {
              color: grey[50],
              backgroundColor: lightBlue["A700"],
            },
            
          },
         
        },
      },
    },
  },
});

temaClaro.typography.h3 = {
  fontSize: "2.2rem",
  "@media (min-width:600px)": {
    fontSize: "1.8rem",
  },
  [temaClaro.breakpoints.up("md")]: {
    fontSize: "2.4rem",
  },
};

temaClaro.typography.h4 = {
  fontSize: "2rem",
  "@media (min-width:600px)": {
    fontSize: "1.6rem",
  },
  [temaClaro.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
};
temaClaro.typography.body1 = {
  fontSize: "1.4rem",
  "@media (min-width:600px)": {
    fontSize: "1rem",
  },
  [temaClaro.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
};


export default temaClaro;