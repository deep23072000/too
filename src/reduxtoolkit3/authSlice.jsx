// src/components/authSlice.js

import { createSlice } from '@reduxjs/toolkit';
const initialState= {
  user: null,
  loading: false,
  error: null,
  items: []
    
}
console.log(initialState.items)
console.log(initialState.user)
// console.log(initialState.user)
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetState: (state) => initialState,
    setUser: (state, action) => {
      state.user = action.payload;
      // console.log(state.user)
    },
    setLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setLogout: (state) => {
      state.user = null;
    },
    addToCart: (state, action) => {
      // state.items.push(action.payload);
      console.log(state.items.push(action.payload))
      
    },
  },
});

export const { setUser, setLoading, setError, setLogout,resetState,addToCart } = authSlice.actions;
export default authSlice.reducer;
