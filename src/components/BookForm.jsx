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

const BookForm = ({ initialValues, onFormSubmit }) => {
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
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    const { name, checked, value, onChange, onFocus, onBlur     } = input;
    return (
      <div className={className}>
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

  const onSubmit = (formValues) => {
    onFormSubmit(formValues);
  };

  const renderForm = ({ handleSubmit }) => (
    <form onSubmit={handleSubmit} className="ui form error">
      <Field name="title" component={renderInput} label="Enter Title" />

      <Field name="category" component="select">
        {CATEGORIES.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </Field>
      <button type="submit" className="ui button primary">
        Create Book
      </button>
    </form>
  );

  const validate = (formValues) => {
    const errors = {};

    if (!formValues.title) {
      errors.title = 'You must enter a title';
    }

    if (!formValues.category) {
      errors.description = 'You must choose a category';
    }

    return errors;
  };

  return (
    <Form
      initialValues={initialValues}
      onSubmit={onSubmit}
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
  onFormSubmit: PropTypes.func.isRequired,
};

export default BookForm;
