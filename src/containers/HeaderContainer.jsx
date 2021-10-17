import Header from '../components/Header';
import useActions from '../hooks/useActions';

const HeaderContainer = () => {
  const { changeFilter } = useActions();
  return (
    <Header
      handleFilterChange={changeFilter}
    />
  );
};

export default HeaderContainer;
