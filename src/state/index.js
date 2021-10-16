import { createStore } from 'redux';
import { nanoid } from 'nanoid';
import rootReducer from './reducers';

export * as actionCreators from './action-creators';

const initialState = {
  books: [
    {
      id: nanoid(),
      title: 'Ego is the Enemy',
      category: 'Stoicism',
    },
    {
      id: nanoid(),
      title: 'Life of Pi',
      category: 'Adventure',
    },
    {
      id: nanoid(),
      title: 'To Kill a MockingBird',
      category: 'Classic',
    },
    {
      id: nanoid(),
      title: 'Watchmen',
      category: 'Comics',
    },
    {
      id: nanoid(),
      title: 'The Hunger Games Trilogy',
      category: 'Sci-fi',
    },
  ],
};

export default createStore(rootReducer, initialState);
