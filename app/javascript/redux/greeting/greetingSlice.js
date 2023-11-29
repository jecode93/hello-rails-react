import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getRandomGreeting = createAsyncThunk(
  "greeting/getRandomGreeting",
  async () => {
    try {
      const response = await fetch("/api/v1/greeting");
      const data = await response.json();
      return data;
    } catch (error) {
      return error.response.data;
    }
  }
);

const initialState = {
  greeting: '',
  isLoading: false,
  error: undefined,
}

const greetingSlice = createSlice({
  name: 'greeting',
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
      state.error = action.payload.message
    }
  }
})

export default greetingSlice.reducer;