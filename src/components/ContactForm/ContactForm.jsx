import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ImUserPlus } from 'react-icons/im';
import { Button } from 'components';
import { addContact } from 'redux/contactsOperations';
import { Forma, Label, Input } from './ContactForm.styled';

const nameRegex = RegExp(
  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/
);
const phoneRegex = RegExp(
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/
);

const SignupSchema = Yup.object().shape({
  name: Yup.string().matches(nameRegex, 'Invalid name').required(),
  phone: Yup.string().matches(phoneRegex, 'Invalid phone').required(),
});

const initialValues = {
  name: '',
  phone: '',
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
      <Forma>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Your name"
          />
          <ErrorMessage name="name">
            {msg => <div style={{ color: 'red' }}>{msg}</div>}
          </ErrorMessage>
        </Label>

        <Label>
          Number
          <Input
            type="tel"
            name="phone"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="000-00-00"
          />
          <ErrorMessage name="phone">
            {msg => <div style={{ color: 'red' }}>{msg}</div>}
          </ErrorMessage>
        </Label>

        <Button type="submit" icon={ImUserPlus} aria-label="Add contact">
          Add contact
        </Button>
      </Forma>
    </Formik>
  );
};

ContactForm.propTypes = {
  values: PropTypes.object,
};
