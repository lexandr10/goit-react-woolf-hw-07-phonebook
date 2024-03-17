import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reduser/reducer';

export const store = configureStore({
  reducer,
});
