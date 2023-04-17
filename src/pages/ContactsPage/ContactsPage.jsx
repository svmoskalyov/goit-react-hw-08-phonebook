import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from 'redux/auth';
import { Box, Typography } from '@mui/material';
import { ContactForm, ContactsList, Filter } from 'components';
import { getContact, selectIsContactsExist } from 'redux/contacts';

export const ContactsPage = () => {
  const IsContactsExist = useSelector(selectIsContactsExist);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  useEffect(() => {
    token && dispatch(getContact());
  }, [dispatch, token]);

  return (
    <>
      <Box
        p="30px"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          mx: 'auto',
          borderRadius: 4,
          minWidth: 500,
          backgroundColor: '#f6f8f9',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography component="h2" variant="h5">
          Add contact in phonebook
        </Typography>

        <ContactForm />
      </Box>
      {IsContactsExist && (
        <Box
          p="30px"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            mx: 'auto',
            borderRadius: 4,
            minWidth: 500,
            backgroundColor: '#f6f8f9',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Typography component="h2" variant="h5" sx={{ textAlign: 'center' }}>
            Contacts list
          </Typography>

          <Filter />
          <ContactsList />
        </Box>
      )}
    </>
  );
};

export default ContactsPage;
