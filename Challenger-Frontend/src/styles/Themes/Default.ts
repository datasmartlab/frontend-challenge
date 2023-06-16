import { createTheme } from "@mui/material/styles";

export const DefaultTheme = createTheme({
  components: {
    MuiPagination: {
      styleOverrides: {
        root: {
          "& .MuiPaginationItem-root": {
            color: "red",
            backgroundColor: "white",
            "&:hover": {
              color: "white",
              backgroundColor: "black",
            },

            "&.MuiPaginationItem-ellipsis,&:hover": {
              background: "none",
              color: "red",
            },
          },
          ul: {
            "& .Mui-selected ": {
              color: "white",
              backgroundColor: "red",
            },
            "&.MuiPaginationItem-icon": {
              "&:hover, &.Mui-selected, &.Mui-disabled": {
                backgroundColor: "red",
              },
            },
          },
          body: {
            "& .MuiContainer-root": {
              backgroundColor: "red",
            },
          },
        },
      },
    },
  },
});

DefaultTheme.typography.h3 = {
  fontSize: "2.2rem",
  "@media (min-width:600px)": {
    fontSize: "1.8rem",
  },
  [DefaultTheme.breakpoints.up("md")]: {
    fontSize: "2.4rem",
  },
};

DefaultTheme.typography.h4 = {
  fontSize: "2rem",
  "@media (min-width:600px)": {
    fontSize: "1.6rem",
  },
  [DefaultTheme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
};
DefaultTheme.typography.body1 = {
  fontSize: "1.4rem",
  "@media (min-width:600px)": {
    fontSize: "1rem",
  },
  [DefaultTheme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
};

DefaultTheme;
