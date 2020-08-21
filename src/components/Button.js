import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonCollors = {
  default: 'default',
  primary: 'primary',
  danger: 'danger',
};

const ButtonVariants = {
  default: 'default',
  outlined: 'outlined',
  linked: 'linked',
};

const getDarkColor = ({ theme, color }) => {
  switch (color) {
    case ButtonCollors.primary:
      return theme.collors.primary.dark;
    case ButtonCollors.danger:
      return theme.collors.danger.dark;
    default:
      return '#5a6268';
  }
};

const getMainColor = ({ theme, color }) => {
  switch (color) {
    case ButtonCollors.primary:
      return theme.collors.primary.main;
    case ButtonCollors.danger:
      return theme.collors.danger.main;
    default:
      return '#e0e0e0';
  }
};

const getColorText = props => props.theme.collors.primary.text;

const getOutlinedText = props => {
  if (props.color === ButtonCollors.default) {
    return '#212121';
  }
  return getMainColor(props);
};

const getLinkedText = props => {
  if (props.color === ButtonCollors.default) {
    return '#757575';
  }
  return getMainColor(props);
};

const Button = styled.button`
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 12px 36px;
  cursor: pointer;
  background-color: ${getMainColor};
  border: 2px solid ${getMainColor};
  color: ${getColorText};

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover:enabled {
    background-color: ${getDarkColor};
    border-color: ${getDarkColor};
  }
`;

const ButtonOutlined = styled(Button)`
  background-color: transparent;
  color: ${getOutlinedText};

  &:hover:enabled {
    background-color: transparent;
    color: ${getDarkColor};
  }
`;

const ButtonLinked = styled(Button)`
  background-color: transparent;
  border-color: transparent;
  color: ${getLinkedText};
  padding-left: 0;
  padding-right: 0;

  &:hover:enabled {
    background-color: transparent;
    border-color: transparent;
    color: ${getDarkColor};
  }
`;

// just because storybook dont support styled components props
const ButtonWrapper = props => {
  switch (props.variant) {
    case ButtonVariants.outlined:
      return <ButtonOutlined {...props} />;
    case ButtonVariants.linked:
      return <ButtonLinked {...props} />;
    default:
      return <Button {...props} />;
  }
};

ButtonWrapper.defaultProps = {
  type: 'button',
  children: undefined,
  color: 'default',
};

ButtonWrapper.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.oneOf(Object.values(ButtonCollors)),
  variant: PropTypes.oneOf(Object.values(ButtonVariants)),
};

export default ButtonWrapper;
