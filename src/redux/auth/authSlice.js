import { createSlice } from "@reduxjs/toolkit";
import { login, logout, register, refreshUser } from "./operations";
import {fetchCards,addCard,deleteCard,setCardsCompleted,
  // editCard
} from "../quests/operations"

const initialState = {
  user: {
    email: null,
    id: "",
    cards: [],
  },
  isLoggedIn: false,
  userName: "",
  token: null,
  isRefreshing: false
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    getUserName(state, action) {
      state.userName = action.payload;
      localStorage.setItem("userName", JSON.stringify(state.userName));
    },
  },
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.userData;
      state.token = action.payload.accessToken;
      state.isLoggedIn = true;
    },
    [logout.fulfilled](state) {
      state.user = {
        email: null,
        id: "",
        cards: [],
      };
      state.isLoggedIn = false;
      state.token = null;
      state.userName = "";
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false
    },
    [refreshUser.fulfilled](state) {
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [fetchCards.pending](state) {
      state.error = null
      state.isLoading = true;
    },
    [fetchCards.fulfilled](state, action) {
      state.isLoading = false;
      state.user = action.payload;
    },
    [fetchCards.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addCard.pending](state) {
      state.error = null
      state.isLoading = true;
    },
    [addCard.fulfilled](state, action) {
      state.isLoading = false;
      state.user.cards.unshift(action.payload);
      state.error = null;
      localStorage.setItem('cards', JSON.stringify(state.user.cards));
    },
    [addCard.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteCard.pending](state) {
      state.error = null
      state.isLoading = true;
    },
    // deleteContact(state, action) {
    //   state.contacts = state.contacts.filter(contact => contact.name !== action.payload);
    //   state.filteredContacts = state.filteredContacts.filter(contact => contact.name !== action.payload);
    // },
    [deleteCard.fulfilled](state, action) {
      // state.isLoading = false;
      // state.user.cards = state.user.cards.filter(card => card._id !== action.payload)
      
      const index = state.user.cards.findIndex(
        (card) => card.id === action.payload.id
      );
      state.user.cards.splice(index, 1);
      // state.user.cards = action.payload;
      localStorage.setItem('cards', JSON.stringify(state.user.cards));
    },
    [deleteCard.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [setCardsCompleted.pending](state) {
      state.error = null
      state.isLoading = true;
    },
    [setCardsCompleted.fulfilled](state, action) {
      state.isLoading = false;
      state.user.cardsCompleted = action.payload;
    },
    [setCardsCompleted.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // [editCard.pending](state) {
    //   state.error = null
    //   state.isLoading = true;
    // },
    // [editCard.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.editCards = action.payload;
    // },
    // [editCard.rejected](state, action) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
});

export const authReducer = authSlice.reducer;
export const { getUserName } = authSlice.actions;
