import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './postsSlice'
import userReducer from './userSlice'

export default configureStore({
  reducer: {
    posts: postsReducer,
    user: userReducer,
  },
})