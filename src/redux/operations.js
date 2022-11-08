import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://636a3dbbc07d8f936d977390.mockapi.io/";

export const fetchContacts = createAsyncThunk('contacts/fetchAll',    
    async (controller, thunkAPI) => {
        try {
            const responce = await axios.get('/contacts', {
                signal: controller.signal
            })
            return responce.data
        } catch (e) {
             return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact', 
    async ({name, number}, thunkAPI) => {
        try {
            const responce = await axios.post('/contacts', { name, number })
            return responce.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
        try {
            const responce = await axios.delete(`/contacts/${contactId}`)
            return responce.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)