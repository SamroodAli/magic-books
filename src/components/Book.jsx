import PropTypes from 'prop-types';
import faker from 'faker';

const Book = ({
  id, title, category, handleRemoveBook,
}) => {
  const removeBook = () => handleRemoveBook(id);
  return (
    <div className="book-card">
      <div className="book-details">
        <p className="School-of">{category}</p>
        <h5 className="Book-Title">{title}</h5>
        <p className="author">{`${faker.name.firstName()} ${faker.name.lastName()}`}</p>
        <div className="book-buttons">
          <button type="button" className="Comments">Comments</button>
          <button type="button" className="Remove" onClick={removeBook}>Remove</button>
          <button type="button" className="Edit">Edit</button>
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
        <div>
          <p className="Percent-Complete">90%</p>
          <p className="Completed">Completed</p>
        </div>
      </div>
      <div className="book-chapter">
        <p className="Current-Chapter">Current chapter  </p>
        <p className="Current-Lesson">Chapter 17</p>
        <button type="button" className="update-book-btn btn">
          <p className="Update-progress">Update Progress</p>
        </button>
      </div>
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
