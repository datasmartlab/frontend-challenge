import { createAsyncThunk } from "@reduxjs/toolkit";
 export const fetchCharactersDataForId = createAsyncThunk('charactersForId', async ({props}:any) => {
  const id = props.id
  try {
    const response = await fetch(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=${process.env.NEXT_PUBLIC_API_KEY}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching characters for id:", error);
    throw error;
  }
});
