import PropTypes from 'prop-types';
import CategoryFilter from './CategoryFilter';

const Header = ({ handleFilterChange }) => (
  <div className="panel-bg">
    <span className="Bookstore-CMS Text-Style-5"> Bookstore CMS </span>
    <span className="BOOKS Text-Style-7"> BOOKS </span>
    <span className="CATEGORIES Text-Style-7">
      <CategoryFilter handleFilterChange={handleFilterChange} />
    </span>
    <div className="Oval">
      <i className="fa fa-user Mask" aria-hidden="true" />
    </div>
  </div>
);

Header.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default Header;
