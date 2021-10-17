import BooksForm from '../containers/BooksFormContainer';
import BooksList from '../containers/BooksListContainer';
import Header from '../containers/HeaderContainer';

const App = () => (
  <div>
    <Header />
    <div className="body">
      <BooksList />
      <BooksForm />
    </div>
  </div>
);
export default App;
