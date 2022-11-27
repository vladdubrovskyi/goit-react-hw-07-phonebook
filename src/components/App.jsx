
import { Section } from "components/Section/Section"
import { ContactForm } from "components/ContactForm/ContactForm"
import {ContactList} from "components/ContactList/ContactList"
import { Filter } from "./Filter/Filter"

export function App() {
 
  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
        {/* <Filter/> */}
      </Section>
      <Section title="Contacts">
        <ContactList />
      </Section>
    </>
     )  
};
