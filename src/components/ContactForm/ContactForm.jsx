import { useState } from "react"
import { nanoid } from 'nanoid'
import {StyledForm} from "components/ContactForm/ContactForm.styled"
import { StyledLabel } from "components/CommonStyled/Label.styled"
import {StyledInput} from "components/CommonStyled/Input.styled"
import { StyledBtn } from "components/CommonStyled/Btn.styled"
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from "redux/selectors";
import { addContact } from "redux/contactsOperations"

export function ContactForm() {
 
   const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

     const nameId = nanoid();
    const numberId = nanoid();
  
const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;
          
      default:
        return;
        };
    };


    
      const handleSubmit = e => {
        e.preventDefault();
        if (contacts.some(contact => contact.name === name)) {
            alert(`${name} is already in contacts`);
            return
        }
        
       dispatch(addContact({ name, number }))
        setName('');
        setNumber('');

    }
    
  

  return (
    <StyledForm onSubmit={handleSubmit}>
          <StyledLabel htmlFor={nameId}>Name</StyledLabel>
      <StyledInput
        id={nameId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          value={name}
              onChange={handleChange}  
          
         
            />
            <StyledLabel htmlFor={numberId}>Number</StyledLabel>
      <StyledInput
         id={numberId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
                value={number}
                onChange={handleChange}        
/>
          <StyledBtn type="submit">Add Contact</StyledBtn>
        </StyledForm>
    )     
}

ContactForm.propTypes = {
    
  onSubmit: PropTypes.func
}