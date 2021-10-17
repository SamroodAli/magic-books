import { useSelector } from 'react-redux';
import BooksList from '../components/BooksList';
import useActions from '../hooks/useActions';

const BooksListContainer = () => {
  const { books, filter } = useSelector((state) => state);
  const { removeBook, changeFilter } = useActions();

  if (books.length) {
    return (
      <BooksList
        books={books}
        currentFilter={filter}
        handleRemoveBook={removeBook}
        handleFilterChange={changeFilter}
      />
    );
  }
  return null;
};

export default BooksListContainer;
