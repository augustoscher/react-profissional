import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { MdExpandMore } from 'react-icons/md';

const Root = styled.div`
  border: 1px solid #e0e0e0;
  border-left: 5px solid ${props => props.theme.colors.primary.main};
`;
const Head = styled.div`
  display: flex;
  align-items: center;
`;

const Body = styled.div`
  padding: 16px;
`;

const Accordion = ({ title, children }) => (
  <Root>
    <Head>
      <h6>{title}</h6>
      <MdExpandMore />
    </Head>
    <Body>{children}</Body>
  </Root>
);

Accordion.defaultProps = {
  title: undefined,
  children: undefined,
};

Accordion.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Accordion;
