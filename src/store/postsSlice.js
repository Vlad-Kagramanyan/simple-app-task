import { createSlice } from '@reduxjs/toolkit';
import { getPosts, createPost, deletePost} from './actions/post-actions'

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    list: [],
  },
  extraReducers: builder => {
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.list = action.payload;
    });
    builder.addCase(createPost.fulfilled, (state, action) => {
      state.list = action.payload;
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export default postsSlice.reducer;
