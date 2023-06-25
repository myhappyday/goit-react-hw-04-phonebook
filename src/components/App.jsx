import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import initialContacts from './data/initialContacts.json';
import { Container, Title, Subtitle } from './App.styled';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(savedContacts);

    if (parsedContacts) {
      // Запис даних з localStorage в state
      this.setState({ contacts: parsedContacts });
      return;
    }
    this.setState({ contacts: initialContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      // Збереження даних зі state в localStorage
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  onDuplicateContact = name => {
    return this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(5),
      name,
      number,
    };

    if (this.onDuplicateContact(name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
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

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
        <Title>Fhonebook</Title>
        <ContactForm onSubmit={this.addContact} />
        <Subtitle>Contacts</Subtitle>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
