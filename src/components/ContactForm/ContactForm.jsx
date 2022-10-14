import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { FormContainer, Input, SubmitButton } from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().required().min(7, 'минимум 7 символов').max(20),
});

const ContactForm = ({ onSubmit }) => {
  const InitialValues = {
    name: '',
    number: '',
  };

  const onSubmitForm = ({ name, number }, { resetForm }) => {
    onSubmit(name, number);
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

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
