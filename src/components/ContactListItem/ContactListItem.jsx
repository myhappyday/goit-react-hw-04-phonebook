import React from 'react';
import PropTypes from 'prop-types';
import { ContactItem, Name, Number, Button } from './ContactListItem.styled';

const ContactListItem = ({ id, name, number, onDelete }) => {
  return (
    <ContactItem>
      <p>
        <Name>{name}:</Name>
        <Number>{number}</Number>
      </p>
      <Button type="button" aria-label="Delete" onClick={() => onDelete(id)}>
        Delete
      </Button>
    </ContactItem>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
