import React from 'react';
import { Form, Field } from 'react-final-form';
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

const CategoryForm = ({ changeFilter }) => {
  const onSubmit = (filter) => {
    changeFilter(filter);
  };

  const renderForm = ({ handleSubmit }) => (
    <form onSubmit={handleSubmit} className="ui form">
      <label htmlFor="category">
        Choose filter
        <Field name="category" component="select">
          {CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Field>
      </label>

    </form>
  );

  return (
    <Form
      onSubmit={onSubmit}
      render={renderForm}
    />
  );
};

CategoryForm.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default CategoryForm;
