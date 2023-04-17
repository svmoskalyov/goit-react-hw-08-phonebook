import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { ImUserMinus } from 'react-icons/im';
import { Button } from 'components';
import { getContacts, getFilter } from 'redux/selectors';
import { removeContact } from 'redux/contactsOperations';
import { List, Item } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <List>
      {getVisibleContacts().map(({ id, name, phone }) => (
        <Item key={id}>
          {name}: {phone}
          <Button
            icon={ImUserMinus}
            onClick={() => dispatch(removeContact(id))}
            aria-label="Delete contact"
          >
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    }).isRequired
  ),
};
