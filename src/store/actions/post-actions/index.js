import { createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs, addDoc, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../../constants/index';

const postCollectionRef = collection(db, 'posts');

export const createPost = createAsyncThunk('users/createPost', async ({ newPost }, thunkAPI) => {
  const response = await addDoc(postCollectionRef, newPost);
  const { list } = thunkAPI.getState().posts;
  return [{ ...newPost, id: response.id }, ...list];
});

export const deletePost = createAsyncThunk('users/deletePost', async ({ id }, thunkAPI) => {
  const postDoc = doc(db, 'posts', id);
  await deleteDoc(postDoc);
  const { list } = thunkAPI.getState().posts;
  return list.filter(item => item.id !== id);
});

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
  const data = await getDocs(postCollectionRef);
  const posts = data.docs.map(doc => {
    return { ...doc.data(), id: doc.id };
  });
  return posts.reverse();
});