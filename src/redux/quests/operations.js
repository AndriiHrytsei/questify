import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCards = createAsyncThunk(
  "card/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/card");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const fetchCardsCompleted = createAsyncThunk(
  "card/fetchAllCompleted",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/card/complete");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const addCard = createAsyncThunk(
  "contacts/addCard",
  async (card, thunkAPI) => {
    try {
      const response = await axios.post("/card", 
         card.title,
         card.difficulty,
         card.category,
         card.date,
         card.time,
         card.type,
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteCard = createAsyncThunk(
  "contacts/deleteCard",
  async (cardId, thunkAPI) => {
    try {
      const response = await axios.delete(`/card/${cardId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
