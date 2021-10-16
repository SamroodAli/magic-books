import PropTypes from 'prop-types';
import Book from './Book';
import CategoryFilter from './CategoryFilter';

const BooksList = ({ books, handleRemoveBook, handleFilterChange }) => {
  const renderBooks = books.map(({ id, title, category }) => (
    <Book key={id} id={id} title={title} category={category} handleRemoveBook={handleRemoveBook} />
  ));

  return (
    <div className="ui container">
      <CategoryFilter handleFilterChange={handleFilterChange} />
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Category</th>
            <th>Remove Book</th>
          </tr>
        </thead>
        <tbody>{renderBooks}</tbody>
      </table>
    </div>
  );
};

BooksList.defaultProps = {
  books: [],
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      category: PropTypes.string,
    }),
  ),
  handleRemoveBook: PropTypes.func.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};
export default BooksList;
