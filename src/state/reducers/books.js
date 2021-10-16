import { CREATE_BOOK, REMOVE_BOOK } from '../actions';

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.payload];
    default:
      return state;
  }
};
export default booksReducer;
