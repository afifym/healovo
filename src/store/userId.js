import { createSlice } from "@reduxjs/toolkit";

const userId = createSlice({
  name: "userId",
  initialState: {
    id: "",
  },
  reducers: {
    updateId(state, action) {
      state.id = action.payload;
    },
  },
});

export const userIdActions = userId.actions;
export default userId.reducer;
