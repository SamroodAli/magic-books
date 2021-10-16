import { nanoid } from 'nanoid';
import { CREATE_BOOK, REMOVE_BOOK } from './actionTypes';

export * from './actionTypes';

export const addBook = ({ title, category }) => ({
  type: CREATE_BOOK,
  payload: {
    id: nanoid(),
    title,
    category,
  },
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

export const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  payload: filter,
});
