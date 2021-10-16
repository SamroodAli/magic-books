import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

export default () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreators, dispatch);
};
