"use client";
import * as React from "react";
import { Suspense } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "next/link";

import { CardActionArea } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";

export const CardLoading = () => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        minWidth: 300,
        width: {
          md: "30%",
          xs: "80%",
        },
      }}
    >
      <Skeleton variant="rectangular" height={200} />
      <Skeleton
        variant="text"
        height={30}
        width={"50%"}
        style={{ marginLeft: "20px" }}
      />
      <Skeleton
        variant="text"
        height={80}
        width={"90%"}
        style={{ marginLeft: "20px" }}
      />
    </Card>
  );
};

export function HeroCard({ props }: any) {
  return (
    <Suspense fallback={<CardLoading />}>
      <Link href={`/HerosInfo/${props.id}`} style={{ textDecoration: "none" }}>
        <Card
          sx={{
            maxWidth: 345,
            minWidth: 300,
            minHeight: {
              md: "400px",
            },
            ":hover": {
              backgroundColor: "whitesmoke"
            },
            maxHeight: {
              md: '400px'
            },
            
          }}
        >
          <CardActionArea sx={{
            padding: '0px 0px 10px'
          }}>
            <CardMedia
              component="img"
              height="auto"
              image={`${props.thumbnail.path}.${props.thumbnail.extension}`}
              alt="hero image"
              sx={{
                maxHeight: "300px",
                backgroundPosition: "center",
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" maxHeight={"4%"} overflow={'hidden'}>
                {props.description ? props.description : "Secret"}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Suspense>
  );
}
