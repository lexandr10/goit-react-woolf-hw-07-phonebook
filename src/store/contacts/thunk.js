import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// https://65f4c46ef54db27bc0224e8d.mockapi.io/phoneBook/contacts
axios.defaults.baseURL =
  'https://65f4c46ef54db27bc0224e8d.mockapi.io/phoneBook/';
export const getContacts = createAsyncThunk(
  'allContacts',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addContact = createAsyncThunk(
  'addContact',
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.post('contacts', contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'deleteContact',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`contacts/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
