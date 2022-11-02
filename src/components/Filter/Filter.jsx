import React from 'react';
import { SearchContainer, SearchInput, TextTitle } from './Filter.styled';
import { getFilterContacts } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = e => {
    dispatch(getFilterContacts(e.target.value));
  };

  return (
    <SearchContainer>
      <label>
        <TextTitle>Find Contacts by Name</TextTitle>
        <SearchInput
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={filter}
          onChange={handleChange}
        />
      </label>
    </SearchContainer>
  );
};

export default Filter;
