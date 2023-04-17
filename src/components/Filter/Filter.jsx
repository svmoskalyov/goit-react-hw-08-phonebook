import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, setFilter } from 'redux/filter';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <TextField
      required
      autoComplete="off"
      name="filter"
      fullWidth
      id="filter"
      label="Filter"
      type="text"
      size="small"
      onChange={e => dispatch(setFilter(e.target.value))}
      value={filter}
    />
  );
};
