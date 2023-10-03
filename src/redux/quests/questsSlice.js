import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCards,
  addCard,
  deleteCard,
  setCardsCompleted,
  editCard,
} from "./operations";
import { login, logout, refreshUser } from "../auth/operations";
const cardSlice = createSlice({
  name: "cards",
  initialState: {
    cards: [],
    cardsCompleted: [],
    editCards: [],
    isLoading: false,
    error: null,
  },
  reducer: {},
  extraReducers: {
    [login.pending](state) {
      state.isLoading = true;
    },
    [login.fulfilled](state, action) {
      state.cards = action.payload.userData.cards;
      state.isLoading = false;
    },
    [login.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [logout.pending](state) {
      state.isLoading = true;
    },
    [logout.fulfilled](state) {
      state.cards = [];
      state.isLoading = false;
    },
    [logout.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [refreshUser.pending](state) {
      state.isLoading = true;
    },
    [refreshUser.fulfilled](state) {
      const storedCards = JSON.parse(localStorage.getItem("cards"));
      state.cards = storedCards;
      state.isLoading = false;
    },
    [refreshUser.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchCards.pending](state) {
      state.error = null
      state.isLoading = true;
    },
    [fetchCards.fulfilled](state, action) {
      state.isLoading = false;
      state.cards = action.payload;
    },
    [fetchCards.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [setCardsCompleted.pending](state) {
      state.error = null
      state.isLoading = true;
    },
    [setCardsCompleted.fulfilled](state, action) {
      state.isLoading = false;
      state.cardsCompleted = action.payload;
    },
    [setCardsCompleted.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [editCard.pending](state) {
      state.error = null
      state.isLoading = true;
    },
    [editCard.fulfilled](state, action) {
      state.isLoading = false;
      state.editCards = action.payload;
    },
    [editCard.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addCard.pending](state) {
      state.error = null
      state.isLoading = true;
    },
    [addCard.fulfilled](state, action) {
      state.isLoading = false;
      state.cards.push(action.payload);
    },
    [addCard.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteCard.pending](state) {
      state.error = null
      state.isLoading = true;
    },
    [deleteCard.fulfilled](state, action) {
      state.isLoading = false;
      const index = state.cards.findIndex(
        (card) => card.id === action.payload.id
      );
      state.cards.splice(index, 1);
      state.cards = action.payload;
    },
    [deleteCard.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const cardsReducer = cardSlice.reducer;
