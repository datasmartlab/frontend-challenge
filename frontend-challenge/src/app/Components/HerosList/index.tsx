"use client";
import { useEffect, useState } from "react";
import { fetchCharactersData } from "@/app/Controller/API";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import { HeroCard, CardLoading } from "./HeroCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
export const HeroList = () => {
  const dispatch = useDispatch();
  const { status, charactersData } = useSelector(
    (state: any) => state.MarvelApiSlice
  );
  const [page, setPage] = useState(0);
  useEffect(() => {
    dispatch(fetchCharactersData({ limit: 18,offset: page * 18 }))
  }, [dispatch,page]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  if(charactersData.data.result) return(
  <>
   <Typography
        variant="h1"
        zIndex={1}
        color={"white"}
        textAlign={"center"}
        fontFamily={"Roboto"}
        margin={"40px 0px"}
      >
        All heroes
      </Typography>
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          gap={10}
          sx={{
          
          }}
        >
          {Array.from({ length: 18 }, (_, i) => (
            <CardLoading key={i} />
          ))}
        </Box>
        </>
  )
  return (
    <>
      <Typography
        variant="h1"
        zIndex={1}
        color={"white"}
        textAlign={"center"}
        fontFamily={"Roboto"}
        margin={"40px 0px"}
      >
        All heroes
      </Typography>
      {status === "loading" && (
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          gap={10}
          sx={{
          
          }}
        >
          {Array.from({ length: 18 }, (_, i) => (
            <CardLoading key={i} />
          ))}
        </Box>
      )}
      {status === "failed" && <p>Error loading data</p>}
      {status === "succeeded" && (
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          gap={10}
          sx={{
          }}
        >
          {charactersData.data.results.map((character: any) => (
            <HeroCard key={character.id} props={character} />
          ))}
         
          
        </Box>)}
        {status === "succeeded" &&
        <Box sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '20px 0px'
        }}>
        <Stack spacing={2}  zIndex={12}  >
          <Pagination color="secondary" sx={{
            backgroundColor: '#ffffff',
            padding: '5px',
            border: '1px solid gray',
            color: '#ffffff',
            borderRadius: '40px'
          }}  count={Math.round(charactersData.data.total / 20)} page={page} onChange={handleChange} />
        </Stack>
        </Box>
        }
      )
    </>
  );
};
