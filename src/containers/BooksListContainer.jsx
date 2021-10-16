import { useSelector } from 'react-redux';
import BooksList from '../components/BooksList';
import useActions from '../hooks/useActions';

const BooksListContainer = () => {
  const books = useSelector(({ books }) => books);
  const { removeBook } = useActions();
  return <BooksList books={books} handleRemoveBook={removeBook} />;
};

export default BooksListContainer;
