import {StyledList} from "components/CommonStyled/List.styled"
import {StyledListItem} from "components/CommonStyled/ListItem.styled"
import {StyledRemoveBtn} from "components/ContactList/BtnRemove.styled"
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactSlice"
import { useEffect } from "react";
import { fetchContactsOperations } from "redux/contactsOperations"
import { getContacts } from "redux/selectors";


export const ContactList = () => {
     const contacts = useSelector(getContacts);    
    // const filter = useSelector(state => state.filter.value);    


// const getFilteredContacts = () => {                                               
//         const normalizedFilter = filter.toLowerCase();
//         return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
//       };
//       const filteredContacts = getFilteredContacts();

    const dispatch = useDispatch();

    const delContact = (id) => {
        dispatch(deleteContact(id));
  };
  
  useEffect(() => {
    dispatch(fetchContactsOperations())
  }, [dispatch])


  return <StyledList>
        {contacts.length > 0 && contacts.map(contact =>
        {
        return (
        <StyledListItem key={contact.id}>
                {contact.name}: {contact.number}
                <StyledRemoveBtn type="button" onClick={() => delContact(contact.id)}>Remove</StyledRemoveBtn>
            </StyledListItem>)
        })}
    </StyledList>
    
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number:PropTypes.string
  })),
  removeContact: PropTypes.func
}