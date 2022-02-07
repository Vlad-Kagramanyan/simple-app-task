import { createSlice } from '@reduxjs/toolkit';
import { createUser, updateUser, getUser } from './actions/user-action'

const user = localStorage.getItem('user');

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: user ? JSON.parse(user) : null,
    error: null,
  },
  extraReducers: builder => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      const { user, error } = action.payload;
      state.user = user;
      state.error = error;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      const { user, error } = action.payload;
      state.user = user;
      state.error = error;
    });
  },
});

export default userSlice.reducer;
