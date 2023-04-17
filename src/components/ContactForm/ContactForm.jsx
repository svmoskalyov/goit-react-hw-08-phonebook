import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik, ErrorMessage, Field, Form } from 'formik';
import * as Yup from 'yup';
import { Box, TextField } from '@mui/material';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { addContact } from 'redux/contacts';
import { ButtonStyle } from 'components';

const nameRegex = RegExp(
  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/
);
const numberRegex = RegExp(
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/
);

const SignupSchema = Yup.object().shape({
  name: Yup.string().matches(nameRegex, 'Invalid name').required(),
  number: Yup.string().matches(numberRegex, 'Invalid number').required(),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
    >
      <Box
        as={Form}
        sx={{
          display: 'grid',
          justifyItems: 'center',
          gap: '15px',
          width: 330,
          borderRadius: 4,
        }}
      >
        <Field
          as={TextField}
          autoComplete="given-name"
          name="name"
          required
          fullWidth
          id="name"
          label="Name"
          type="text"
          size="small"
        />

        <ErrorMessage name="name">
          {msg => <div style={{ color: 'red' }}>{msg}</div>}
        </ErrorMessage>

        <Field
          as={TextField}
          autoComplete="on"
          name="number"
          required
          fullWidth
          id="number"
          label="Number"
          type="text"
          size="small"
        />

        <ErrorMessage name="number">
          {msg => <div style={{ color: 'red' }}>{msg}</div>}
        </ErrorMessage>

        <ButtonStyle
          type="submit"
          startIcon={<PersonAddAlt1Icon />}
        >
          Add contact
        </ButtonStyle>
      </Box>
    </Formik>
  );
};

ContactForm.propTypes = {
  values: PropTypes.object,
};
