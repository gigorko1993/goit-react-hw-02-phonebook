import React from "react";

const ContactItem = ({ removeContact, contacts }) => {
  return contacts.map(({ name, number, id }) => {
    return (
      <li key={id}>
        {name}: {number}
        <button onClick={() => removeContact(id)} type="button">
          Delete
        </button>
      </li>
    );
  });
};

export default ContactItem;
