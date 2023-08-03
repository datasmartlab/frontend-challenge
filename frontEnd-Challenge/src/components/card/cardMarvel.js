import React from "react";
import { NavLink } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Card, CardContent, Container, Grid } from "@mui/material";

export const CardMarvel = ({ data }) => {
  return (
    <Container>
      <Grid
        container
        spacing={2}
        sx={{
          justifyContent: "center", // Centraliza os itens em resoluções menores
          margin: "3rem auto",
          gap: "1rem",
        }}
      >
        {data
          ? data.map((item) => {
              return (
                <NavLink state={{ id: item.id }} to={`/hero`} key={item.id}>
                  <Card
                    sx={{
                      minWidth: 150,
                      width: "200px",
                      height: "100%",
                      backgroundColor: "#af1f24",
                      color: "white",
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardMedia
                      sx={{
                        height: "300px",
                      }}
                      image={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                    />
                    <CardContent>
                      <Typography>{item.name}</Typography>
                    </CardContent>
                  </Card>
                </NavLink>
              );
            })
          : ""}
      </Grid>
    </Container>
  );
};
