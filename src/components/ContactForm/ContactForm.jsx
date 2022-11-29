// import React, { useState } from "react"
import { nanoid } from 'nanoid'
import {StyledForm} from "components/ContactForm/ContactForm.styled"
import { StyledLabel } from "components/CommonStyled/Label.styled"
import {StyledInput} from "components/CommonStyled/Input.styled"
import { StyledBtn } from "components/CommonStyled/Btn.styled"
import PropTypes from 'prop-types';
import { addContact } from "../../redux/contactSlice"
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from "redux/selectors";

export function ContactForm() {
 
  
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  
    const onAddContact = ( newContact) => {   

        const contactsNames = contacts.map(contact => contact.name);
    
        if (contactsNames.includes(newContact.name)) {
          alert(`${newContact.name} is already in contacts`)
        } else {
          dispatch(addContact(newContact));
        }    
      }

    
      const handleSubmit = e => {
        e.preventDefault();
        const form = e.target
        const contact = {
          id: nanoid(),
          name: form.elements.name.value,
        number: form.elements.number.value}
    onAddContact(contact)
    form.reset()
    }
    
  

  return (
    <StyledForm onSubmit={handleSubmit}>
          <StyledLabel >Name</StyledLabel>
          <StyledInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          
          
         
            />
            <StyledLabel>Number</StyledLabel>
            <StyledInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
                        
/>
          <StyledBtn type="submit">Add Contact</StyledBtn>
        </StyledForm>
    )     
}

ContactForm.propTypes = {
    
  onSubmit: PropTypes.func
}