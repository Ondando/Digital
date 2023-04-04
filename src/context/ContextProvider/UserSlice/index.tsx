import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "user/getAllUsers",
  async (thunkApi) => {
    const response = await fetch("http://localhost:3001/user");
    const data = await response.json();
    return data;
  }
);

const initialState = {
  entities: [],
} as any;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.entities.push(...action.payload);
    });
  },
});

export default userSlice.reducer;
