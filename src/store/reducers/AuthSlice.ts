import { createSlice } from "@reduxjs/toolkit";
import { IAdmin } from "../../interfaces";

export interface IinitialState {
  admin: IAdmin | null;
  isLoggedIn: boolean;
}

const initialState: IinitialState = {
  admin: localStorage.getItem("fleetMgtAdmin")
    ? JSON.parse(localStorage.getItem("fleetMgtAdmin")!)
    : null,
  isLoggedIn: localStorage.getItem("fleetMgtAdmin") ? true : false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginAdmin: (state, action) => {
      state.admin = action.payload;
      localStorage.setItem("admin", JSON.stringify(state.admin));
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.admin = null;
      localStorage.removeItem("admin");
      state.isLoggedIn = false;
    },
  },
});

export const { loginAdmin, logout } = authSlice.actions;
