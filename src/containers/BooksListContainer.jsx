import { useSelector } from 'react-redux';
import BooksList from '../components/BooksList';

const BooksListContainer = () => {
  const books = useSelector(({ books }) => books);
  return <BooksList books={books} />;
};

export default BooksListContainer;
