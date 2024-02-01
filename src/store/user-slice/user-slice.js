import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    userList: [],
  },
  reducers: {
    setUserList: (currentSlice, action) => {
      currentSlice.userList = action.payload;
    },
    addUser: (currentSlice, action) => {
      currentSlice.userList.push(action.payload);
    },
  },
});

export const userReducer = userSlice.reducer;
export const { setUserList, addUser } = userSlice.actions;