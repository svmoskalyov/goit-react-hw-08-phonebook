import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, List, ListItem } from '@mui/material';
import PersonRemoveAlt1Icon from '@mui/icons-material/PersonRemoveAlt1';
import { deleteContact, selectContacts } from 'redux/contacts';
import { selectFilter } from 'redux/filter';

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
        // flexDirection: 'column-reverse',
      }}
    >
      {filterContacts
        ?.map(({ id, name, number }) => (
          <ListItem
            key={id}
            sx={{
              justifyContent: 'space-between',
            }}
          >
            {name}: {number}
            <Button
              type="button"
              variant="contained"
              size="small"
              onClick={() => dispatch(deleteContact(id))}
              startIcon={<PersonRemoveAlt1Icon />}
            >
              Delete
            </Button>
          </ListItem>
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
