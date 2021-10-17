import PropTypes from 'prop-types';
import faker from 'faker';

const Book = ({
  id, title, category, handleRemoveBook,
}) => {
  const removeBook = () => handleRemoveBook(id);
  return (
    <div className="book-card">
      <div className="book-details">
        <p>{category}</p>
        <h5>{title}</h5>
        <p>{`${faker.name.firstName()} ${faker.name.lastName()}`}</p>
        <div className="book-buttons">
          <button type="button">Comments</button>
          <button type="button" onClick={removeBook}>Remove</button>
          <button type="button" onClick={removeBook}>Edit</button>
        </div>
      </div>
      <div className="book-progress">
        <div className="circular">
          <div className="inner" />
          <div className="circle">
            <div className="bar left">
              <div className="progress" />
            </div>
            <div className="bar right">
              <div className="progress" />
            </div>
          </div>
        </div>
      </div>
      <div className="book-chapter" />
    </div>

  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
