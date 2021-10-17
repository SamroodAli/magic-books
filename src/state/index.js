import { createStore } from 'redux';
import rootReducer from './reducers';

export * as actionCreators from './actions';

export default createStore(rootReducer);
