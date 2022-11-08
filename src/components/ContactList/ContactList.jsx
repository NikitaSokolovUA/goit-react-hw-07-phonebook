import {
  ContactItem,
  ListContact,
  Contact,
  ContactNumber,
  DeleteBtn,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectFilterContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilterContacts);

  useEffect(() => {
    const controller = new AbortController();

    dispatch(fetchContacts(controller));

    return () => controller.abort();
  }, [dispatch]);

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
