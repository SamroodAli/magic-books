import PropTypes from 'prop-types';
import Book from './Book';

const BooksList = ({ books, handleRemoveBook }) => {
  const renderBooks = books.map(({ id, title, category }) => (
    <Book key={id} id={id} title={title} category={category} handleRemoveBook={handleRemoveBook} />
  ));

  return (
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
};
export default BooksList;
