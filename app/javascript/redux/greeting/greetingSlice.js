import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const URL = "http://127.0.0.1:3000/api/v1/greeting";

const getRandomGreeting = createAsyncThunk('greeting/getRandomGreeting', () => {
  return fetch(URL)
    .then((resp) => resp.json())
    .catch((error) => console.log(error));
});

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