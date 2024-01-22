import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  userName: "",
  id: "",
};

export const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setUserId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { setFirstName, setLastName, setUserName, setUserId } =
  UserSlice.actions;
export default UserSlice.reducer;
