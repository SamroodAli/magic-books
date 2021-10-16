import PropTypes from 'prop-types';
import Book from './Book';

const BooksList = ({ books }) => {
  const renderBooks = books.map(({ id, title, category }) => (
    <Book key={id} id={id} title={title} category={category} />
  ));

  return (
    <table className="ui celled table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Category</th>
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
};
export default BooksList;
