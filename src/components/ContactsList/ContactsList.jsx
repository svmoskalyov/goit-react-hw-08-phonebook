import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Box,
  List,
  ListItemButton,
  Typography,
} from '@mui/material';
import { deleteContact, selectContacts } from 'redux/contacts';
import { selectFilter } from 'redux/filter';
import { ButtonStyle } from 'components';
import PersonIcon from '@mui/icons-material/Person';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const lowerCaseContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filterContacts = lowerCaseContacts();

  return (
    <List
      dense={true}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        // flexDirection: 'column-reverse',
      }}
    >
      {filterContacts
        ?.map(({ id, name, number }) => (
          <ListItemButton
            key={id}
            sx={{
              justifyContent: 'space-between',
              borderRadius: 1,
              boxShadow: 2,
            }}
          >
            <Box sx={{ display: 'flex', gap: '5px' }}>
              <PersonIcon sx={{ color: 'primary.main'}} />
              <Typography component="h4" variant="h7" fontStyle="italic">
                {name}:
              </Typography>
              {number}
            </Box>

            <ButtonStyle
              type="button"
              size="small"
              onClick={() => dispatch(deleteContact(id))}
              startIcon={<DeleteIcon />}
            >
              Delete
            </ButtonStyle>
          </ListItemButton>
        ))
        .reverse()}
    </List>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};
