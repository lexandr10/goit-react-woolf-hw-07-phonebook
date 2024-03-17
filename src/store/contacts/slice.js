import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, getContacts } from './thunk';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], error: '', loading: false },
  extraReducers: builder => {
    builder
      .addCase(getContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(el => el.id !== payload.id);
      })
      .addMatcher(
        action => action.type.endsWith('pending'),
        state => {
          state.loading = true;
          state.error = '';
        }
      )
      .addMatcher(
        action => action.type.endsWith('rejected'),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      )
      .addMatcher(
        action => action.type.endsWith('fulfilled'),
        state => {
          state.error = '';
          state.loading = false;
        }
      );
  },
});
export const contactsReducer = contactsSlice.reducer;
