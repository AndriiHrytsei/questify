export const selectUser = (state) => state.auth.user;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectUserName = (state) => state.auth.userName;

export const selectIsRefreshing = (state) => state.auth.isRefreshing;

export const getCards = state => state.auth.user.cards;

export const getSetCardsCompleted = state => state.auth.user.cardsCompleted;

