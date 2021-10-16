import BooksForm from '../components/BookForm';

const BooksFormContainer = () => {
  const onSubmit = (formValues) => {
    console.log(formValues);
  };
  return <BooksForm onFormSubmit={onSubmit} />;
};
export default BooksFormContainer;
