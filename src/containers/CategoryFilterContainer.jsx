import CategoryFilter from '../components/CategoryFilter';
import useActions from '../hooks/useActions';

const CategoryFilterContainer = () => {
  const { changeFilter } = useActions();
  return (
    <CategoryFilter changeFilter={changeFilter} />
  );
};

export default CategoryFilterContainer;
