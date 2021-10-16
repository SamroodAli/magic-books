import React from 'react';
import PropTypes from 'prop-types';

const CATEGORIES = [
  '',
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const CategoryFilter = ({ handleFilterChange }) => {
  const onSelect = (event) => {
    handleFilterChange(event.target.value);
  };

  return (
    <div className="ui form">
      <label htmlFor="category">
        Choose filter
        <select name="category" onChange={onSelect}>
          {CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
