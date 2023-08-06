import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerUser = createAsyncThunk(
  '/auth/register',
  async (body, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', body);

      setAuthToken(res.data.token);

      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  '/auth/logIn',
  async (body, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', body);

      setAuthToken(res.data.token);

      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  '/auth/logOut',
  async (_, thunkAPI) => {
    try {
      const res = await axios.post('/users/logout');

      clearAuthToken();
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  '/auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null)
      return thunkAPI.rejectWithValue('Unable to refresh user!');

    try {
      setAuthToken(persistedToken);

      const res = await axios.get('/users/current');

      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
