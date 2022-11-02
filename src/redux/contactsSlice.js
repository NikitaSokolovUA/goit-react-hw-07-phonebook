import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [{id: 1, name: "Nikita", number: '000-000-00-00'}],
        filter: ""
    },
    reducers: {
        addContacts:{
            reducer({ contacts }, action) {
                    contacts.push(action.payload)
            }  , 
            prepare(name, number) {
            return {
                payload: {
                    id: nanoid(), 
                    name,
                    number,
                    }
                }
            }
        },
         deleteContact({contacts}, action) {        
                const index = contacts.findIndex(contact => contact.id === action.payload)
                contacts.splice(index, 1)            
        },
        getFilterContacts(state, action) {
            state.filter = action.payload
        }        
    },
})


export const {addContacts, deleteContact, getFilterContacts} = contactsSlice.actions
export const contactsReducer = contactsSlice.reducer