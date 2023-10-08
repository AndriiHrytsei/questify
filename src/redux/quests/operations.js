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
export const setCardsCompleted = createAsyncThunk(
  "card/setAllCompleted",
  async (_, thunkAPI) => {
    try {
      const response = await axios.patch("/card/complete");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const editCard = createAsyncThunk(
  "card/editCard",
  async ({ cardId, cardOption }, thunkAPI) => {
    try {
      const response = await axios.patch(`/card/${cardId}`, {
        title: cardOption.title,
        difficulty: cardOption.difficulty,
        category: cardOption.category,
        date: cardOption.date,
        time: cardOption.time,
        type: cardOption.type,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const addCard = createAsyncThunk(
  "card/addCard",
  async ({ title, difficulty, category, date, time, type }, thunkAPI) => {
    try {
      const response = await axios.post("/card", {title, difficulty, category, date, time, type});
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteCard = createAsyncThunk(
  "card/deleteCard",
  async (cardId, thunkAPI) => {
    try {
      const response = await axios.delete(`/card/${cardId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
