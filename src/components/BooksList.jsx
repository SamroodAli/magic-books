import PropTypes from 'prop-types';
import Book from './Book';

const BooksList = ({ books, currentFilter, handleRemoveBook }) => {
  const bookToBookElement = ({ id, title, category }) => (
    <Book
      key={id}
      id={id}
      title={title}
      category={category}
      handleRemoveBook={handleRemoveBook}
    />
  );

  const currentFilterBooksOnly = (book) => {
    if (currentFilter === 'All') {
      return true;
    }
    return book.category === currentFilter;
  };

  return books
    .filter(currentFilterBooksOnly)
    .map(bookToBookElement);
};

BooksList.defaultProps = {
  books: [],
  currentFilter: 'All',
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      category: PropTypes.string,
    }),
  ),
  currentFilter: PropTypes.string,
  handleRemoveBook: PropTypes.func.isRequired,
};
export default BooksList;
