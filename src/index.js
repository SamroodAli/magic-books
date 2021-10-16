import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './state';
import App from './components/App';
import './style.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
