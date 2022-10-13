import React, { Component } from "react";
import PropTypes from 'prop-types';
import { FormContainer, Input, Label, LabelName, SubmitButton } from "./ContactForm.styled";

class ContactForm extends Component {
    state= {
        name: '',
        number: '',
    }

    handleChange = e => {
        const {name, value} = e.currentTarget
        this.setState({[name]: value})
    }

    handleSubmitForm = e => {
        e.preventDefault()

        const { name, number } = this.state
        
        this.props.onSubmit(name, number)

        this.reset()
    }

    reset = () => {
    this.setState({
      name: '',
      number: '',
    })
    }

    render() {
        const { name, number } = this.state

      return <FormContainer>
      <form onSubmit={this.handleSubmitForm}>
        <Label >
          <LabelName>Name</LabelName>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleChange}
          />
        </Label>
        <Label >
          <LabelName>Telephone</LabelName>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            required
            onChange={this.handleChange}
          />
        </Label>

        <SubmitButton type="submit">Save</SubmitButton>
        </form>
        </FormContainer>
    }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default ContactForm