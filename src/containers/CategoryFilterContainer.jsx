// import CategoryFilter from '../components/categoryFilter';
import useActions from '../hooks/useActions';

const CategoryFilterContainer = () => {
  const { changeFilter } = useActions();
  return (
    <button type="button" onClick={() => changeFilter('Action')}>Hello</button>
  );
};

export default CategoryFilterContainer;
