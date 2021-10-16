import BooksForm from '../components/BookForm';
import useActions from '../hooks/useActions';

const BooksFormContainer = () => {
  const { addBook } = useActions();
  return <BooksForm onFormSubmit={addBook} />;
};
export default BooksFormContainer;
