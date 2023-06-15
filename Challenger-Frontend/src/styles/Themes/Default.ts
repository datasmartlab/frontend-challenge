import { createTheme } from "@mui/material/styles";

export const DefaultTheme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
  components: {
    MuiPagination: {
      styleOverrides: {
        root: {
          "& .MuiPaginationItem-root": {
            color: "red", // Substitua 'red' pela cor desejada
            backgroundColor: "white",
            "&.MuiPaginationItem-ellipsis": {
              background: "none",
            },
          },
          ul: {
            "& .Mui-selected": {
              color: "white", // Substitua 'red' pela cor desejada
              backgroundColor: "gray",
            },
            "& .MuiPaginationItem-page:hover": {
              backgroundColor: "gray", // Substitua 'red' pela cor desejada
            },
            "&.MuiPaginationItem-icon": {
              "&:hover, &.Mui-selected, &.Mui-disabled": {
                backgroundColor: "red", // Substitua 'red' pela cor desejada
              },
            },
          },
        },
      },
    },
  },
});
