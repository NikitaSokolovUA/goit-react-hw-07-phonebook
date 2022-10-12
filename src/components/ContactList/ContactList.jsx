import React from "react";
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