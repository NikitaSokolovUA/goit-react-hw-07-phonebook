import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { FormContainer, Input, SubmitButton } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().required().min(7, 'минимум 7 символов').max(20),
});

const ContactForm = () => {
  const InitialValues = {
    name: '',
    number: '',
  };

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const onSubmitForm = ({ name, number }, { resetForm }) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in contact list`);
    }

    dispatch(addContacts(name, number));
    resetForm();
  };

  return (
    <FormContainer>
      <Formik
        initialValues={InitialValues}
        validationSchema={schema}
        onSubmit={onSubmitForm}
      >
        <Form>
          <Input type="text" name="name" />
          <ErrorMessage name="name" />
          <Input type="text" name="number" />
          <ErrorMessage name="number" />

          <SubmitButton type="submit">Save</SubmitButton>
        </Form>
      </Formik>
    </FormContainer>
  );
};

export default ContactForm;
