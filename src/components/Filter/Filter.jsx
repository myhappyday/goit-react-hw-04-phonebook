import React from 'react';
import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

const Filter = ({ value, onChange }) => (
  <Label>
    Find contacts by name
    <Input type="text" name="filter" value={value} onChange={onChange} />
  </Label>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
