import { createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../../constants/index';
import { collection, getDocs, getDoc, updateDoc, addDoc, doc, where, query } from 'firebase/firestore';
const userCollectionRef = collection(db, 'users');

export const createUser = createAsyncThunk('users/createUser', async ({ newUser, navigate }) => {
  const data = await addDoc(userCollectionRef, newUser);
  const userDoc = doc(db, 'users', data.id);
  const docSnap = await getDoc(userDoc);
  let user = null;
  if (docSnap.exists()) {
    user = { ...docSnap.data(), id: docSnap.id };
  }
  navigate('/')
  localStorage.setItem('user', JSON.stringify(user));
  return user;
});

export const updateUser = createAsyncThunk('users/updateUser', async ({ updatedUser, id }, thunkAPI) => {
  const userDoc = doc(db, 'users', id);
  await updateDoc(userDoc, updatedUser);
  const newUser = { ...updatedUser, id }
  newUser && localStorage.setItem('user', JSON.stringify(newUser));
  return { user: newUser, error: null };
});

export const getUser = createAsyncThunk('users/getUser', async ({ email, password }) => {
  const q = query(collection(db, 'users'), where('email', '==', email));
  const querySnapshot = await getDocs(q);
  let user = null;
  querySnapshot.forEach(doc => {
    const data = doc.data();
    if (data.password === password) {
      user = { ...data, id: doc.id };
    }
  });
  user && localStorage.setItem('user', JSON.stringify(user));
  return user ? { user, error: null } : { user: null, error: 'login or password is wrong' };
});