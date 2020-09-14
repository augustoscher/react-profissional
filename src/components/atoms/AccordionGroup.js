// import React from 'react';
import PropTypes from 'prop-types';

const AccordionGroup = ({ children }) => children;

AccordionGroup.defaultProps = {
  children: undefined,
};

AccordionGroup.propTypes = {
  children: PropTypes.node,
};

export default AccordionGroup;
