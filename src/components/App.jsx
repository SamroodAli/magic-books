import BooksForm from '../containers/BooksFormContainer';
import BooksList from '../containers/BooksListContainer';
import Header from './Header';

const App = () => (
  <div>
    <Header />
    <BooksList />
    <BooksForm />
  </div>
);
export default App;
