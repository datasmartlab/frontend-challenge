"use client";
import { useState, Suspense } from "react";
import { Caroussel } from "./caroussel";
import { MostPopularHerosData as Images } from "./PopularHerosDoc";
import ButtonCustom from "../Button";
import Image from "next/image";
import { useRouter } from 'next/navigation'
import { Box, Typography } from "@mui/material";
import "./style.css";

export const PageCaroussel = () => {
  const [index, setIndex] = useState(0);
  const router = useRouter()

  const alterBackgroundImage = (e: number) => {
    setIndex(e);
  };

  const buttonStyle = {
    margin: "20px auto",
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Box
        overflow="hidden"
        sx={{
          backgroundColor: "#000000",
          display: "flex",
          position: "relative",
          justifyContent: "center",
          height: "100vh",
          maxWidth: "100vw",
          width: {
            md: "100%",
            sm: "100vw",
            xs: "100vw",
          },
        }}
      >
        <Box
          zIndex={1}
          sx={{
            display: "flex",
            marginTop: {
              md: "90px",
              sm: "60px",
            },
            width: {
              md: "30%",
              xs: "100%",
            },
            textAlign: {
              md: "center",
              xs: "center",
            },
            flexDirection: "column",
            position: {
              md: "absolute",
              sm: "static",
            },
            padding: {
              md: "10px",
            },
            height: {
              md: "400px",
            },
            fill: "solid black",
            left: "120px",
            background: {
              md: "rgba(255, 255, 255, 0.25)",
              xs: "rgba(255,255,255,0.25)"
            },
            borderRadius: "14px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backDropFilter: { md: "blur(3.5px)" },
            border: "1px solid rgba(255, 255, 255, 0.31)",
          }}
        >
          <Typography
            variant="h2"
            color={Images[index].color}
            fontFamily="Roboto"
          >
            {Images[index].Title}
          </Typography>
          <Typography
            variant="subtitle1"
            
            fontWeight={"bold"}
            textAlign={"justify"}
            sx={{
              height: {
                md: "200px",
              },
              width: {
                md: "80%",
              },
              padding: "20px",
              textShadow: " -1px 3px 4px rgba(0,0,0,0.75)",
              color: {
                md: "whitesmoke",
                xs:"whitesmoke"
              }
            }}
          >
            {Images[index].Description}
          </Typography>

          <ButtonCustom
            style={buttonStyle}
            Title="see more"
            backgroundColor={Images[index].color}
            color="white"
            onClick={(e) => router.push(`/HerosInfo/${Images[index].id}`)}
            width="md"
          />
        </Box>

        <Image
          src={Images[index].Image}
          alt="hero Image"
          sizes="100"
          key={index}
          width="100"
          style={{
            position: "absolute",
            height: "100vh",
            width: "auto",
            animation: "startImage 1s",
          }}
        />

        <Caroussel Images={Images} alterIndex={alterBackgroundImage} />
      </Box>
    </Suspense>
  );
};
