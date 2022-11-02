import {
  ContactItem,
  ListContact,
  Contact,
  ContactNumber,
  DeleteBtn,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';

const filterContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = filterContacts(contacts, filter);
  const dispatch = useDispatch();

  return (
    <ListContact>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <ContactItem key={id}>
            <Contact>
              {name} <ContactNumber>{number}</ContactNumber>
            </Contact>
            <DeleteBtn
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Deleted
            </DeleteBtn>
          </ContactItem>
        );
      })}
    </ListContact>
  );
};

export default ContactList;
