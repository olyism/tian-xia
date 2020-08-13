import React from 'react';
import {
  arrayOf,
  oneOfType,
  node,
  string
} from 'prop-types';
import styled from 'styled-components';
import { NAVBAR_HEIGHT } from '../../constants/theme';

const Component = ({ id, className, children }) => <section className={className} id={id}>{children}</section>;

const Section = styled(Component)`
  &::before {
    content: "";
    display: block;
    height: ${NAVBAR_HEIGHT};
    margin-top: -${NAVBAR_HEIGHT};
    visibility: hidden;
    width: 0px;
  }
`;

Component.propTypes = {
  children: oneOfType([
    arrayOf(node),
    node
  ]),
  className: string,
  id: string,
};

Component.defaultProps = {
  children: null,
  className: '',
  id: '',
};

export default Section;
