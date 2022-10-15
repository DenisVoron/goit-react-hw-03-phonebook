import React, { Component } from 'react'

import { nanoid } from 'nanoid'

import { Container } from './Container/Container'
import { Section } from './Section/Section'
import { ContactsForm } from './ContactsForm/ContactsForm';
import { Wrapper } from './Wrapper/Wrapper';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';


export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  };


  componentDidMount() {
    console.log(App);
    
    const contactEl = localStorage.getItem('contact');
    const parsContacts = JSON.parse(contactEl);

  if (parsContacts) {
    this.setState({ contacts: parsContacts });
  }

    console.log(parsContacts);
  }


  componentDidUpdate(prevProps, prevState) {
    console.log('app');

    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contact', JSON.stringify(this.state.contacts));
    }
  }
  


  addContacts = ({name, number}) => {
    const { contacts } = this.state;

    const contactObj = {
      id: nanoid(),
      name,
      number,
    };

    for (const contact of contacts) {

      if (contact.name === name) {
        alert(`${name} is already in contact`);

        return;
      }
    }

    this.setState(prevState => ({
      contacts: [contactObj, ...prevState.contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };


  getVisiblContact = () => {
    return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()));
  };

  render() {
    const contactList = this.getVisiblContact();

    return (
      <Container>
        <Section title='Phonebook'>
          <ContactsForm onDataSubmit={this.addContacts} />
        </Section>
        <Section title='Contacts'>
          <Wrapper>
            <Filter value={this.state.filter} onFilterChange={this.changeFilter} />
            <ContactList contacts={contactList} onDeleteContact={this.deleteContact} />
          </Wrapper>
        </Section>
      </Container>
    );
  }
}
