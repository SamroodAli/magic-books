import { createStore } from 'redux';
import rootReducer from './reducers';

export * as actionCreators from './actions';

const initialState = {
  books: [
    {
      id: 'some id',
      title: 'title of book',
      category: 'Action',
    },
  ],
  filter: 'All',
};
export default createStore(rootReducer, initialState);
