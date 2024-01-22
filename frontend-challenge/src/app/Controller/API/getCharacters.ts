import { createAsyncThunk } from "@reduxjs/toolkit";
type props = {
  limit: number,
  offset: number
}
const initialState:props = {
  limit: 20,
  offset: 0
}
 export const fetchCharactersData:any = createAsyncThunk('AllCharacters', async (props = initialState) => {
  const limit = props.limit
  const offset = props.offset 
  try {
    const response = await fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=${process.env.NEXT_PUBLIC_API_KEY}&offset=${offset}&limit=${limit}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw error;
  }
});
