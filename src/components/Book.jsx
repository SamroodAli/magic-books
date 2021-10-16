import PropTypes from 'prop-types';

const Book = ({
  id, title, category, handleRemoveBook,
}) => {
  const removeBook = () => handleRemoveBook(id);
  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td>
        <button type="button" onClick={removeBook} className="ui button warning">{`Remove ${title}`}</button>
      </td>
    </tr>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
