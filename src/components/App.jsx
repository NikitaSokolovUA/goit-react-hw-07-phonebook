import React, { Component } from "react";
import { nanoid } from 'nanoid'

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  }

  handleChange = e => {
    const {name, value} = e.currentTarget
    console.log(e.currentTarget.name);

    this.setState({[name]: value})
  }

  reset = () => {
    this.setState({name: ''})
  }

  addContactOnSubmitForm = e => {
    e.preventDefault()

    const {name, number} = this.state

    const newContact = {
      id: nanoid(),
      name, 
      number,
    }

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts]
    }))

    this.reset()
  }
  
  render() {
    const {name, contacts, number} = this.state

    return <>
      <h1>PHONEBOOK</h1>
      <form onSubmit={this.addContactOnSubmitForm}>
        <label >
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label >
          Telephone
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            required
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">Save</button>
      </form>
      
      <h2>CONTACTS</h2>
      <ul>
        {contacts.map(({id, name, number}) => {
          return <li key={id}>
                    <p>{ name } <span>{number}</span></p>
                </li>
       })}
      </ul>
    
    </>
    
  }

}

export default App
