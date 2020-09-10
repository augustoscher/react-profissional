import styled from 'styled-components';
import PropTypes from 'prop-types';

import { breakAt, BreakpointSizes } from '../../styles/Breakpoints';

const Grid = styled.div`
  display: grid;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  /* default value */
  grid-template-columns: 1fr;

  /* defining columns by screen size*/
  ${breakAt(BreakpointSizes.sm)} {
    grid-template-columns: repeat(${props => props.sm}, 1fr);
  }

  ${breakAt(BreakpointSizes.md)} {
    grid-template-columns: repeat(${props => props.md}, 1fr);
  }

  ${breakAt(BreakpointSizes.lg)} {
    grid-template-columns: repeat(${props => props.lg}, 1fr);
  }

  ${breakAt(BreakpointSizes.xl)} {
    grid-template-columns: repeat(${props => props.xl}, 1fr);
  }
`;

Grid.defaultProps = {
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined,
};

Grid.propTypes = {
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
};

export default Grid;
