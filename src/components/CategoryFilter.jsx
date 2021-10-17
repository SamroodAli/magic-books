import React from 'react';
import PropTypes from 'prop-types';

const CATEGORIES = [
  'All',
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
    <label htmlFor="category">
      <select name="category" onChange={onSelect}>
        {CATEGORIES.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </label>
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
