import BooksForm from '../containers/BooksFormContainer';
import BooksList from '../containers/BooksListContainer';
import CategoryFilter from '../containers/CategoryFilterContainer';

const App = () => (
  <div className="ui container">
    <BooksForm />
    <CategoryFilter />
    <BooksList />
  </div>
);
export default App;
