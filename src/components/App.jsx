import React, { Component } from "react";
import { nanoid } from 'nanoid'
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";
import { ContactTitle, Container, MainTitle } from "./App.styled";

class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  } 

  

  addContactOnSubmitForm = (name, number) => {  
    
    if (this.state.contacts.find(contact =>
      contact.name.toLowerCase() === name.toLowerCase())) {
     return alert(`${name} is already in contact list`)
    }

    const newContact = {
      id: nanoid(),
      name, 
      number,
    }

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts]
    }))

  }

  handleChange = e => {
        const { name, value } = e.currentTarget
        this.setState({[name]: value})
  }

  filterContact = () => {
    
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    )
  }

  deletedContact = (id) => {
    this.setState(prevState => {
      return {contacts: prevState.contacts.filter(contact => contact.id !== id)}      
    })
  }


  render() {
    const {filter} = this.state
    const filteredContacts =this.filterContact()

    return <>
      <Container>
      <MainTitle>PHONEBOOK</MainTitle>
      <ContactForm onSubmit={this.addContactOnSubmitForm} />      
      <ContactTitle>CONTACTS</ContactTitle>
      <Filter filter={filter} onChange={this.handleChange } />
      <ContactList contacts={filteredContacts} onDeleted={ this.deletedContact } />
      </Container>
    </>
    
  }

}

export default App
