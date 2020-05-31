import React, { Component } from 'react';

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: 'John Doe',
          email: 'jdoe@gmail.com',
          phone: '555-555-5555',
        },
        {
          id: 2,
          name: 'Karen Williams',
          email: 'karen@gmail.com',
          phone: '333-333-3333',
        },
        {
          id: 3,
          name: 'Alex Smith',
          email: 'alex@gmail.com',
          phone: '444-444-4444',
        },
      ],
    };
  }
  render() {
    const { contacts } = this.state;

    return (
      <div>
        {contacts.map((contact) => (
          <h1>{contact.name}</h1>
        ))}
      </div>
    );
  }
}

export default Contacts;
