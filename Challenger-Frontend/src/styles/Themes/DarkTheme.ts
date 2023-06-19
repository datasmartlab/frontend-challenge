import { grey, red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const DarkTheme = createTheme({
  palette: {
    info:{
      main:grey[400],
      light:grey[50]
    },
    primary: {
      main:grey[900], // cor personalizada = #262626
      dark:grey[800],  // cor personalizada = #333333
      contrastText: red["A700"],
    },
    error:{
      main:red["A700"]
    },
    secondary:{
      main:red["A700"]
    }
  },
  components: {
    MuiPagination: {
      styleOverrides: {
        root: {
          "& .MuiPaginationItem-root": {
            color: red["A700"],
            backgroundColor: grey[50],
              "&:hover":{
                color: grey[50],
                backgroundColor: grey[500],
            },
            "&.MuiPaginationItem-ellipsis": {
              background: "none",
              color: red["A700"],
            },

          },
          ul: {
            "& .Mui-selected ": {
              color: grey[50],
              backgroundColor: red["A700"],
            },
          },
        },
      },
    },
  },
});

DarkTheme.typography.h3 = {
  fontSize: "2.2rem",
  "@media (min-width:600px)": {
    fontSize: "1.8rem",
  },
  [DarkTheme.breakpoints.up("md")]: {
    fontSize: "2.4rem",
  },
};

DarkTheme.typography.h4 = {
  fontSize: "2rem",
  "@media (min-width:600px)": {
    fontSize: "1.6rem",
  },
  [DarkTheme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
};
DarkTheme.typography.body1 = {
  fontSize: "1.4rem",
  "@media (min-width:600px)": {
    fontSize: "1rem",
  },
  [DarkTheme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
};

export default DarkTheme;
