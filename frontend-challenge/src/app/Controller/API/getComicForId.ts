import { createAsyncThunk } from "@reduxjs/toolkit";
 export const fetchComicForId = createAsyncThunk('comicForId', async (id:string) => {
  try {
    const response = await fetch(`https://gateway.marvel.com:443/v1/public/comic/${id}?apikey=${process.env.NEXT_PUBLIC_API_KEY}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching comics for id:", error);
    throw error;
  }
});
