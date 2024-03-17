import { createSelector } from '@reduxjs/toolkit';

export const getContact = state => state.contacts.items;
export const getFilter = state => state.filter.filter;
export const getLoading = state => state.contacts.loading;
export const getError = state => state.contacts.error;
export const getFilteredContacts = createSelector(
  [getContact, getFilter],
  (contacts, filter) => {
    if (!filter) {
      return contacts;
    }
    return contacts.filter(user =>
      user.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
