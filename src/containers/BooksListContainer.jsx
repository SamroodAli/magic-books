import { useSelector } from 'react-redux';
import BooksList from '../components/BooksList';
import useActions from '../hooks/useActions';

const BooksListContainer = () => {
  const { books, filter } = useSelector((state) => state);

  const { removeBook, changeFilter } = useActions();
  return (
    <BooksList
      books={books}
      currentFilter={filter}
      handleRemoveBook={removeBook}
      handleFilterChange={changeFilter}
    />
  );
};

export default BooksListContainer;
