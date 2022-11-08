import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";

const handlePending = (state) => {
    state.contacts.isLoading = true
}
const handleRejected = (state, action) => {
    state.contacts.isLoading = false
    state.contacts.error = action.payload
}


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: {
            items: [],
            isLoading: false,
            error: null
        },
         filter: ""
    },
    reducers: {
        getFilterContacts(state, action) {
            state.filter = action.payload
        }  
    },
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [fetchContacts.rejected]: handleRejected,
        [fetchContacts.fulfilled](state, action) {
            state.contacts.isLoading = false
            state.contacts.items = action.payload
        },
        [addContact.pending]: handlePending,
        [addContact.rejected]: handleRejected,
        [addContact.fulfilled](state, action) {
            state.contacts.items.push(action.payload)
        },
        [deleteContact.pending]: handlePending,
        [deleteContact.rejected]: handleRejected,
        [deleteContact.fulfilled](state, action) {
            const index = state.contacts.items.findIndex(contact => contact.id === action.payload.id)
            state.contacts.items.splice(index, 1)
        },
    }
    
})

export const {getFilterContacts} = contactsSlice.actions
export const contactsReducer = contactsSlice.reducer