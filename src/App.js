import React, { Component } from 'react';
import shortid from 'shortid';
import Container from "./Components/Container";
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';
import FilterContacts from './Components/FilterContacts';
import "./App.css"

class App extends Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: ''
    };

    componentDidMount() {
        const contacts = localStorage.getItem('contacts');
        const parsedContacts = JSON.parse(contacts);

        if (parsedContacts) {
            this.setState({ contacts: parsedContacts });
        }
    };

    componentDidUpdate(prevProps, prevState) {
        const nextContacts = this.state.contacts;
        const prevContacts = prevState.contacts;

        if (nextContacts !== prevContacts) {
            localStorage.setItem('contacts', JSON.stringify(nextContacts));
        }
    };

    addContact = (name, number) => {
        const { contacts } = this.state;
        
        if (contacts.find(contact => contact.name === name)) {
            alert(`${name} is already in contacts.`);
            return;
        }
        
        const contact = {
            id: shortid.generate(),
            name,
            number,
        };

        this.setState(({ contacts }) => ({
            contacts: [contact, ...contacts],
        }));
    };

    deleteContact = contactId => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(contact => contact.id !== contactId),
        }));
    };

    changeFilter = e => {
        this.setState({ filter: e.currentTarget.value });
    };

    getVisibleContacts = () => {
        const { filter, contacts } = this.state;
        const normalizedFilter = filter.toLowerCase();

        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter),
        );
    };

    render() {
        const { filter } = this.state;

        return (
            <Container>
                <h1>Phonebook</h1>
                <ContactForm onSubmit={this.addContact}/>
                <h2>Contacts</h2>
                <FilterContacts
                    value={filter}
                    onChange={this.changeFilter} />
                <ContactList
                    contacts={this.getVisibleContacts()}
                    onDeleteContact={this.deleteContact}
                />
            </Container>
        )
    };
};

export default App;