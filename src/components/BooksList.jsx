import PropTypes from 'prop-types';

const BooksList = ({ books }) => {
  const renderBooks = books.map(({ id, title, category }) => (
    <tr key={id}>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
    </tr>
  ));
  return (
    <table>
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
