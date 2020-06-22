import React from 'react';
import styled from 'styled-components';
import { arrayOf, node, oneOf, oneOfType, string } from 'prop-types';
import { 
  BORDER_RADIUS,
  BREAKPOINTS,
  COLOR, 
  FONT_SIZE,
  LINE_HEIGHT,
  SPACING 
} from '../../constants/theme.js'

const ButtonType = ({ type, to, className, children }) => {
  const TagName = type;
  return <TagName className={className} type="button" href={to}>{children}</TagName>
};

const Button = styled(ButtonType)`
  background: ${COLOR.CLOUD_BURST};
  border: 2px solid ${COLOR.CLOUD_BURST};
  border-radius: 28px;
  color: ${COLOR.WHITE};
  display: block;
  font-weight: bold;
  font-size: ${FONT_SIZE.BASE};
  line-height: ${LINE_HEIGHT.BASE};
  min-width: 80px;
  padding: 16px 20px;
  position: relative;
  text-decoration: none;
  text-align: center;
  transition: background-color .25s;

  &:hover {
    background-color: ${COLOR.BLACK};
  }

  @media (min-width: ${BREAKPOINTS.MD}) {
    display: inline-block;
  }

  &::after {
    border: 2px solid ${COLOR.WHITE};
    border-radius: 24px;
    content: " ";
    height: calc(100% - 6px);
    left: 1px;
    position: absolute;
    top: 1px;
    transition: border-color .25s;
    width: calc(100% - 6px);

    &:hover {
      border-color: ${COLOR.BLACK}; 
    }
  }
`;

Button.propTypes = {
  type: oneOf(['a', 'button']),
  to: string,
  className: string,
  children: oneOfType([
    arrayOf(node),
    node
  ]).isRequired,
};

Button.defaultProps = {
  type: 'a',
  to: '',
  className: '',
};

export default Button;