import { createAsyncThunk } from "@reduxjs/toolkit";
 export const fetchAllComicsData = createAsyncThunk('AllComics', async () => {
  try {
  const response = await fetch(`https://gateway.marvel.com:443/v1/public/comics?apikey=${process.env.NEXT_PUBLIC_API_KEY}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching comics:", error);
    throw error;
  }
});