import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { charactersActions } from "../../redux/heroes/heroSlice";
import { Topbar } from "../topbar/topbar";
import { Box, Grid, Typography } from "@mui/material";
import "../../index.css";

export const Hero = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const id = location.state.id; //Utilizando useLocation para obter o ID do herói a partir da URL
  const { fetchIdRequest } = charactersActions;
  const heroinfo = useSelector((state) => state.characters.heroInfo);

  useEffect(() => {
    dispatch(fetchIdRequest(id));
  }, [dispatch, fetchIdRequest, id]);



  return (
    <div className="box-content">
      <Topbar />
      {!heroinfo ? (
        ""
      ) : (
        <>
          <Grid key={heroinfo} container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box
                width="100%"
                display="flex"
                alignItems="center"
                textAlign="justify"
                justifyContent="space-around"
                color="red"
                height="600px"
                padding="10px"
              >
                <img
                  src={`${heroinfo.thumbnail.path}.${heroinfo.thumbnail.extension}`}
                  alt=""
                  width={300}
                  height={400}
                  border="1px solid"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                width="100%"
                height="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                padding="10px"
                textAlign="center"
                sx={{
                  "@media (max-width: 768px)": {
                    height: "auto",
                    marginTop: "20px",
                  },
                }}
              >
                <Typography
                  variant="h2"
                  fontFamily="Bebas Neue, sans-serif"
                  color="white"
                >
                  {heroinfo.name}
                </Typography>
                <Typography
                  variant="h8"
                  fontFamily="Bebas Neue, sans-serif"
                  color="white"
                >
                  {heroinfo.description}<br/>
                  Comics: {heroinfo.comics.available},
                  Series: {heroinfo.series.available},
                  Stories: {heroinfo.stories.available}
                </Typography>
              </Box>
            </Grid>
          </Grid>{" "}
        </>
      )}
    </div>
  );
};
