import React from 'react';
import PropTypes from 'prop-types';

const CATEGORIES = [
  'Categories',
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
    <select name="category" className="category" onChange={onSelect} placeholder="Categories">
      {CATEGORIES.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
