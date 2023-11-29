import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "api/v1/greeting";

export const getRandomGreeting = createAsyncThunk(
  "greeting/getRandomGreeting",
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get(URL);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const initialState = {
  greeting: "",
  isLoading: false,
  error: undefined,
};

const greetingSlice = createSlice({
  name: "message",
  initialState,
  reducers: {},
  extraReducers: {
    [getRandomGreeting.pending]: (state) => {
      state.isLoading = true;
    },
    [getRandomGreeting.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.greeting = action.payload;
    },
    [getRandomGreeting.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    },
  },
});

export default greetingSlice.reducer;
