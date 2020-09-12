import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

import Heading from '../atoms/Heading';
import Button from '../atoms/Button';

const Root = styled.div`
  background-color: #fff;
  border-radius: 4px;
`;

const Body = styled.div`
  padding: 16px;

  h6 {
    margin-top: 0;
  }
`;

const Card = () => (
  <Root>
    <div></div>
    <Body>
      <Heading>
        <h6>Colheitas</h6>
      </Heading>
      <p>Nostrud nisi veniam do veniam ea sunt ipsum do.</p>
      <div>
        <Button variant="link" color="primary">
          Saiba mais
        </Button>
      </div>
    </Body>
  </Root>
);

// Card.defaultProps = {};

// Card.propTypes = {};

export default Card;
