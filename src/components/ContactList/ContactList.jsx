import React from "react";
import PropTypes from 'prop-types';
import { ContactItem, ListContact, Contact, ContactNumber, DeleteBtn } from "./ContactList.styled";

const ContactList = ({contacts, onDeleted}) => {

    return <ListContact>
        {contacts.map(({id, name, number}) => {
          return <ContactItem key={id}>
              <Contact>{name} <ContactNumber>{number}</ContactNumber></Contact>
              <DeleteBtn type="button" onClick={()=> onDeleted(id)}>Deleted</DeleteBtn>
                </ContactItem>
       })}
      </ListContact>
}

export default ContactList

ContactList.propTypes = {
  onDeleted: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  })),
}
