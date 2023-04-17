import { useDispatch } from 'react-redux';
import { filters } from 'redux/filtersSlice';
import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(filters(e.target.value));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Label>
        Find contacts by name
        <Input
          type="text"
          name="filter"
          onChange={handleSubmit}
          title="Name may contain only letters, apostrophe, dash and spaces. For
        example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
    </form>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
