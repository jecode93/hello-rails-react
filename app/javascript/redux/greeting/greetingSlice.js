import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const getRandomGreeting = createAsyncThunk(
  "greeting/getRandomGreeting",
  async () => {
    try {
      const response = await fetch("http://127.0.0.1:3000/api/v1/greeting");
      console.log(response);
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      return error.response.data;
    }
  }
);

const initialState = {
  greeting: '',
  isLoading: false,
  error: []
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