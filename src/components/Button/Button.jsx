import React from 'react';
import styled from 'styled-components';
import { arrayOf, node, oneOf, oneOfType, string } from 'prop-types';
import { 
  BREAKPOINTS,
  COLOR, 
  FONT_SIZE,
  LINE_HEIGHT,
} from '../../constants/theme.js'

const ButtonStyle = ({ tagName, to, btnStyle, target, className, children }) => {
  const TagName = tagName;
  const targetProp = tagName === 'a' && target !== '_self' ? target : '';
  return <TagName className={className} type="button" href={to} target={targetProp}>{children}</TagName>
};

const Button = styled(ButtonStyle)`
  background: transparent;
  border: 2px solid ${COLOR.CLOUD_BURST};
  box-sizing: border-box;
  border-radius: 28px;
  color: ${COLOR.CLOUD_BURST};
  display: block;
  font-size: ${FONT_SIZE.BASE};
  font-weight: bold;
  line-height: ${LINE_HEIGHT.BASE};
  min-width: 120px;
  padding: 16px 20px;
  text-decoration: none;
  text-align: center;
  transition: background-color .25s, border-color .25s;

  @media (min-width: ${BREAKPOINTS.MD}) {
    display: inline-block;
  }

  ${({ btnStyle }) => {
    if (btnStyle === 'primary') {
      return `
        background: ${COLOR.CLARET};
        border: 2px solid ${COLOR.CLARET};
        color: ${COLOR.WHITE};
        position: relative;

        &:hover {
          background-color: ${COLOR.TUNA};
        }
      `;
    }

    if (btnStyle === 'default-white') {
      return `
        border-color: ${COLOR.WHITE};
        color: ${COLOR.WHITE};
      `;
    }

    if (btnStyle === 'primary-white') {
      return `
        background: ${COLOR.WHITE};
        border-color: ${COLOR.CLARET};
        color: ${COLOR.CLARET};
        position: relative;

        &:hover {
          background-color: ${COLOR.IRON};
        }
      `;
    }
  }}
`;

Button.propTypes = {
  tagName: oneOf(['a', 'button']),
  to: string,
  btnStyle: oneOf(['default', 'primary', 'default-white', 'primary-white']),
  target: oneOf(['_self', '_blank']),
  className: string,
  children: oneOfType([
    arrayOf(node),
    node
  ]).isRequired,
};

Button.defaultProps = {
  tagName: 'a',
  btnStyle: 'default',
  to: '',
  target: '_self',
  className: '',
};

export default Button;