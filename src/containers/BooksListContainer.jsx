import { useSelector } from 'react-redux';
import BooksList from '../components/BooksList';
import useActions from '../hooks/useActions';

const BooksListContainer = () => {
  const books = useSelector(({ books }) => books);
  const { removeBook, changeFilter } = useActions();
  return (
    <BooksList
      books={books}
      handleRemoveBook={removeBook}
      handleFilterChange={changeFilter}
    />
  );
};

export default BooksListContainer;
