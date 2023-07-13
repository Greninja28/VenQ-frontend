import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
}

export const authReducer = createReducer(initialState, {
  SIGNUP_REQUEST: (state) => {
    state.loading = true;
  },
  SIGNUP_SUCCESS: (state, action) => {
    state.loading = false;
    state.userDetails = action.payload.message;
    state.userToken = action.payload.token;
    state.error = null;
  },
  SIGNUP_FAILURE: (state, action) => {
    state.loading = false;
    state.userDetails = null;
    state.userToken = null; // Reset the token in case of failure
    state.error = action.payload;
  },


  VERIFY_REQUEST: (state) => {
    state.loading = true
  },
  VERIFY_SUCCESS: (state, action) => {
    state.loading = false
    state.message = action.payload.message
    state.userDetails = action.payload.details
    state.error = null
  },
  VERIFY_FAILURE: (state, action) => {
    state.loading = false
    state.message = null
    state.userDetails = null
    state.error = action.payload
  },


  LOGIN_REQUEST: (state) => {
    state.loading = true
  },
  LOGIN_SUCCESS: (state, action) => {
    state.loading = false
    state.loginMessage = action.payload.message
    state.userToken = action.payload.token
    state.error = null
  },
  LOGIN_FAILURE: (state, action) => {
    state.loading = false
    state.loginMessage = null
    state.userToken = null
    state.error = action.payload
  },


  LOGOUT_REQUEST: (state) => {
    state.loading = true
  },
  LOGOUT_SUCCESS: (state, action) => {
    state.loading = false
    state.logoutMessage = action.payload.message
    state.user = action.payload.user
    state.error = null
  },
  LOGOUT_FAILURE: (state, action) => {
    state.loading = false
    state.logoutMessage = null
    state.user = null
    state.error = action.payload
  },

});
