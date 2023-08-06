const { createSlice } = require('@reduxjs/toolkit');
const {
  registerUser,
  loginUser,
  logoutUser,
  refreshUser,
} = require('./operations');

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registerUser.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logoutUser.fulfilled]: state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [refreshUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.pending]: state => {
      state.isRefreshing = true;
    },
    [refreshUser.rejected]: state => {
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;
