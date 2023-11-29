import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "http://127.0.0.1:3000/api/v1/greeting";

const getRandomGreeting = createAsyncThunk(
  "greeting/getRandomGreeting",
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get(URL);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  greeting: "ij",
  isLoading: false,
  error: [],
};

const greetingSlice = createSlice({
  name: "greeting",
  initialState,
  reducers: {},
  extraReducers: {
    [getRandomGreeting.pending]: (state) => {
      state.isLoading = true;
    },
    [getRandomGreeting.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.greeting = action.payload.message;
    },
    [getRandomGreeting.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    },
  },
});

export default greetingSlice.reducer;
