import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

const Root = styled.div`
  background-color: #fff;
  border-radius: 4px;
`;

const StyledBody = styled.div`
  padding: 16px;

  h6 {
    margin-top: 0;
  }
`;

export const CardBody = ({ children }) => <StyledBody>{children}</StyledBody>;

const Card = ({ children }) => (
  <Root>
    <div></div>
    {children}
  </Root>
);

// Card.defaultProps = {};

// Card.propTypes = {};

export default Card;
