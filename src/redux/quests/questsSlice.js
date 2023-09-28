import { createSlice } from "@reduxjs/toolkit";
import { fetchCards } from "./operations";
import { addCard, deleteCard, fetchCardsCompleted } from "./operations";
const cardSlice = createSlice({
  name: "cards",
  initialState: {
    cards: [],
    cardsCompleted: [],
    isLoading: false,
  },
  reducer: {},
  extraReducers: {
    [fetchCards.pending](state) {
      state.isLoading = true;
    },
    [fetchCards.fulfilled](state, action) {
      state.isLoading = false;
      state.cards = action.payload;
    },
    [fetchCardsCompleted.pending](state) {
      state.isLoading = true;
    },
    [fetchCardsCompleted.fulfilled](state, action) {
      state.isLoading = false;
      state.cardsCompleted = action.payload;
    },
    [addCard.pending](state) {
      state.isLoading = true;
    },
    [addCard.fulfilled](state, action) {
      state.isLoading = false;
      state.cards.push(action.payload);
    },
    [deleteCard.pending](state) {
      state.isLoading = true;
    },
    [deleteCard.fulfilled](state, action) {
      state.isLoading = false;
      const index = state.cards.findIndex(
        card => card.id === action.payload.id
      )
      state.cards.splice(index,1)
      state.cards = action.payload;
    },
  },
});

export const cardsReducer = cardSlice.reducer;
