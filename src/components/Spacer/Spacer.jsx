import React from 'react';
import styled from 'styled-components';
import { oneOf, string } from 'prop-types'
import { SPACING } from '../../constants/theme';

const Element = ({ spacing, className }) => <div spacing={spacing} className={className} />;

const Spacer = styled(Element)`
  clear: both;
  height: ${({ spacing }) => SPACING[spacing]};
  width: 100%;
`;

Spacer.propTypes = {
  className: string,
  spacing: oneOf(Object.keys(SPACING)).isRequired,
};

Spacer.defaultProps = {
  className: '',
};

export default Spacer;
