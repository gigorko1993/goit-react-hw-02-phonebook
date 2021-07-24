import React, { Component } from "react";

import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
import s from "./App.module.css";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = (newContact) => {
    const contactCheck = this.state.contacts.find(
      ({ name }) => name === newContact.name
    );

    if (contactCheck !== undefined) {
      alert(`${newContact.name} is already in contact`);
      return;
    }

    this.setState((prevState) => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  removeContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  onChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  render() {
    const lowerCasedFilter = this.state.filter.toLowerCase();
    const filteredContacts = this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(lowerCasedFilter)
    );

    return (
      <div>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2 className={s.title}>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.onChange} />
        <ContactList
          removeContact={this.removeContact}
          contacts={filteredContacts}
        />
      </div>
    );
  }
}

export default App;
