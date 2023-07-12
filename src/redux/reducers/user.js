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
    state.message = action.payload
    state.error = null
  },
  VERIFY_FAILURE: (state, action) => {
    state.loading = false
    state.message = null
    state.error = action.payload
  }

});
