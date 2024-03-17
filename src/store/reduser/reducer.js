import { contactsReducer } from 'store/contacts/slice';
import { filterReducer } from 'store/filterSlice/filterSlice';

export const reducer = {
  contacts: contactsReducer,
  filter: filterReducer,
};
