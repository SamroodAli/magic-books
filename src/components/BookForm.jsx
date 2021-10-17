import React from 'react';
import { Form, Field } from 'react-final-form';
import PropTypes from 'prop-types';

const CATEGORIES = [
  'Choose Category',
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const BookForm = ({ initialValues, handleChange }) => {
  const renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
    return null;
  };

  const renderInput = ({ input, label, meta }) => {
    const {
      name, checked, value, onChange, onFocus, onBlur,
    } = input;
    return (
      <div className="Lesson-Panel">
        <label htmlFor={label}>{label}</label>
        <input
          id={label}
          name={name}
          checked={checked}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          autoComplete="off"
        />
        {renderError(meta)}
      </div>
    );
  };

  const renderForm = ({ handleSubmit }) => (
    <div className="form-container">
      <span className="Title Text-Style-10">ADD NEW BOOK</span>
      <form onSubmit={handleSubmit} className="form">
        <Field name="title" component={renderInput} label="Enter Title" />

        <Field name="category" component="select" placeholder="Choose Category">
          {CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Field>

        <button type="submit">Create Book</button>
      </form>
    </div>
  );

  const validate = (formValues) => {
    const errors = {};

    if (!formValues.title) {
      errors.title = 'You must enter a title';
    }

    if (!formValues.category || formValues.category === 'Choose Category') {
      errors.category = 'You must choose a category';
    }

    return errors;
  };

  return (
    <Form
      initialValues={initialValues}
      onSubmit={handleChange}
      validate={validate}
      render={renderForm}
    />
  );
};

BookForm.defaultProps = {
  initialValues: { title: '', category: '' },
};
BookForm.propTypes = {
  initialValues: PropTypes.shape({
    title: PropTypes.string,
    category: PropTypes.string,
  }),
  handleChange: PropTypes.func.isRequired,
};

export default BookForm;
