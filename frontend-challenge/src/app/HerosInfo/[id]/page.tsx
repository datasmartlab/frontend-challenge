"use client";
import { fetchCharactersDataForId } from "@/app/Controller/API";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { CarousselInfos } from "./CarousselInfos";
import "./style.css";
import CircularProgress from '@mui/material/CircularProgress';
import Link from "next/link";

const style = {
  py: 0,
  width: "100%",
  maxWidth: 360,
  borderRadius: 2,
  border: "1px solid",
  borderColor: "divider",
  color: "white",
};

export const Heros = ({ params }: { params: { id: string } }) => {
  const dispatch = useDispatch();
  const { status, characterid } = useSelector((state: any) => state.MarvelApiSlice);

  useEffect(() => {
    dispatch(fetchCharactersDataForId({ props: { id: params.id } })) ;
  }, [dispatch, params.id]);

  if (status === "loading" || !characterid.data) {
    return (
      <Box sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Box
        sx={{
          paddingTop: {
            md: "90px",
          },
          margin: "0px",
          display: "flex",
          backgroundColor: "black",
          overflowX: "hidden",
          maxWidth: "100vw",
          minHeight: "100vh",
          flexDirection: {
            md: "row",
            xs: "column",
          },
        }}
      >
        <Box
          position="relative"
          sx={{
            width: {
              md: "50%",
              xs: "100%",
            },
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image
            src={`${characterid.data.results[0].thumbnail.path}.${characterid.data.results[0].thumbnail.extension}`}
            width={300}
            height={300}
            alt="Image"
            style={{
              height: "80%",
              width: "auto",
              borderRadius: "5px",
              border: "2px solid gray",
              margin: "20px 0px",
            }}
          />
        </Box>
        <Box
          sx={{
            marginLeft: {
              md: "80px",
            },
            height: "auto",
            minHeight: "65vh",
            width: {
              md: "40%",
            },
            padding: "20px",
            borderRadius: "10px",
            margin: "20px 0px",
            border: {
              xs: "transparent",
            },
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
          }}
        >
          <Typography
            variant="h2"
            color={"white"}
            fontFamily={"Roboto"}
            sx={{
              textAlign: {
                xs: "center",
                md: "start",
              },
              width: "100%",
            }}
          >
            {characterid.data.results[0].name}
          </Typography>

          <Typography
            variant="subtitle1"
            color={"white"}
            textAlign="center"
            fontFamily={"Roboto"}
            sx={{
              textAlign: {
                xs: "justify",
                md: "start",
              },
              width: {
                md: "60%",
                xs: "100%",
              },
              padding: {
                xs: "20px 0px",
              },
            }}
          >
            {characterid.data.results[0].description
              ? characterid.data.results[0].description
              : "Secret"}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: {
                md: "row",
                xs: "column",
              },
              justifyContent: "start",
              alignItems: "center",
              gap: "10px",
              width: {
                md: "100%",
                xs: "100%",
              },
            }}
          >
            <Typography
              width={"100%"}
              zIndex={1}
              color="whitesmoke"
              variant="h4"
              textAlign={"center"}
            >
              Historic
            </Typography>
            <span
              style={{
                border: "1px solid white",
                width: "100%",
                margin: "20px 0px",
              }}
            ></span>

            {characterid.data.results[0].comics.returned > 0 && (
              <CarousselInfos
                infos={characterid.data.results[0].comics.items}
                title="Comics"
              />
            )}
            {characterid.data.results[0].series.returned > 0 && (
              <CarousselInfos
                infos={characterid.data.results[0].series.items}
                title="Series"
              />
            )}
            {characterid.data.results[0].events.returned > 0 && (
              <CarousselInfos
                infos={characterid.data.results[0].events.items}
                title="Events"
              />
            )}
            <span
              style={{
                border: "1px solid white",
                width: "100%",
                margin: "20px 0px",
              }}
            ></span>
            <Typography
              width={"100%"}
              zIndex={1}
              color="whitesmoke"
              variant="h4"
              textAlign={"center"}
            >
              Links 
            </Typography>
            <Box
              sx={{
                gap: "10px",
                justifyContent: "center",
                width: "100%",
                textAlign: 'center'
              }}
            >
              {characterid.data.results[0].urls.map(
                (url: any, index: number) => (
                  <Link href={url.url} style={{ textDecoration: "none", color: 'whitesmoke'}}>
                    <Typography key={index} variant="h5" color="whitesmoke">
                      {url.type}
                    </Typography>
                  </Link>
                )
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Heros;
