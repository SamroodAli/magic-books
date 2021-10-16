import { createStore } from 'redux';
import rootReducer from './reducers';

export * as actionCreators from './action-creators';
export default createStore(rootReducer);
