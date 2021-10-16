import BooksForm from '../components/BookForm';
import useActions from '../hooks/useActions';

const BooksFormContainer = () => {
  const { addBook } = useActions();
  return <BooksForm handleChange={addBook} />;
};
export default BooksFormContainer;
