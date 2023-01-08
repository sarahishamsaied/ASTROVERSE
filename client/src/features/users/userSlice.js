import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  email: "",
  password: "",
  first_name: "",
  last_name: "",
  age: "",
  authority_level: "",
  isAuthenticated: false,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.isAuthenticated = true;
    },
    logout: (state, action) => {
      state.email = "";
      state.password = "";
      state.first_name = "";
      state.last_name = "";
      state.age = "";
      state.authority_level = "";
      state.isAuthenticated = false;
    },
    register: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.age = action.payload.age;
      state.authority_level = "user";
      state.isAuthenticated = true;
    },
    assignRole: (state, action) => {
      state.authority_level = action.payload.authority_level;
    },
  },
});
export const { login, logout, register, assignRole } = userSlice.actions;
export default userSlice.reducer;
