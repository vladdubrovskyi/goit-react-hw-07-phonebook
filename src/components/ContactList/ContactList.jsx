import React from 'react'
import { StyledList } from "components/CommonStyled/List.styled"
import {StyledListItem} from "components/CommonStyled/ListItem.styled"
import {StyledRemoveBtn} from "components/ContactList/BtnRemove.styled"
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContactsOperations, deleteContact } from "redux/contactsOperations"
import { getContacts, getError, getIsLoading, getStatusFilter } from "redux/selectors";


export const ContactList = () => {
    const dispatch = useDispatch();
     const contacts = useSelector(getContacts);    
   const filterName  = useSelector(getStatusFilter);
    const error = useSelector(getError);
    const loading = useSelector(getIsLoading); 


     useEffect(() => { dispatch(fetchContactsOperations()) }, [dispatch]);

    const getFilterContacts = () => {
        if (!filterName) {
            return contacts;
        }
  let normalizedFilter  = filterName.toLowerCase()

        
        const filtredContacts = contacts.filter(({ name }) =>
            name.toLowerCase().includes(normalizedFilter));
        return filtredContacts;
    }

    const contactsAfterFilter = getFilterContacts();
    


    return <>
        {error && <p>{error.message}</p>}
        {loading && <p> Loading ... </p>}
        <StyledList>
        {contactsAfterFilter.length > 0 && contactsAfterFilter.map(contact =>
        {
        return (
        <StyledListItem key={contact.id}>
                {contact.name}: {contact.number}
                <StyledRemoveBtn type="button" onClick={() => dispatch(deleteContact(contact.id))}>Remove</StyledRemoveBtn>
            </StyledListItem>)
        })}
    </StyledList>
    </>
    
    
    
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number:PropTypes.string
  })),
  removeContact: PropTypes.func
}