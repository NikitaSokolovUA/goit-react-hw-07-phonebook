import React, { Component } from "react";
import PropTypes from 'prop-types';
import { SearchContainer, SearchInput, TextTitle } from "./Filter.styled";

class Filter extends Component {

    render() {
        const {filter, onChange} = this.props

        return <SearchContainer>
            <label >
        <TextTitle>Find Contacts by Name</TextTitle>
        <SearchInput
            type="text"
            name="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={filter}
            onChange={onChange}
        />
            </label>
            </SearchContainer>
    }
}

export default Filter

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
}