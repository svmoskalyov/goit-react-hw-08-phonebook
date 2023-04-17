import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from 'constants';
import { ContactForm, ContactList, Filter } from 'components';
import { getIsContactsExist } from 'redux/selectors';
import { getContact } from 'redux/contactsOperations';
import { Title } from './Home.styled';

export const Home = () => {
  const isContactsExist = useSelector(getIsContactsExist);
  const dispatch = useDispatch();

  useEffect(() => {
    !isContactsExist && dispatch(getContact());
  }, [dispatch, isContactsExist]);

  return (
    <Box as="main" display="grid" width="500px" mx="auto" p={4} gridGap="2em">
      <Box as="section">
        <Title>Phonebook</Title>
        <ContactForm />
      </Box>

      {isContactsExist && (
        <Box as="section">
          <Title>Contacts</Title>
          <Filter />
          <ContactList />
        </Box>
      )}
    </Box>
  );
};
