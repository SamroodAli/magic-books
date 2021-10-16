import BooksForm from '../components/BooksForm';

const BooksFormContainer = () => {
  const onSubmit = (formValues) => {
    console.log(formValues);
  };
  return <BooksForm onFormSubmit={onSubmit} />;
};
export default BooksFormContainer;
