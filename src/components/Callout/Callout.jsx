import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import Button from '../Button';
import { BORDER_RADIUS, COLOR, CONTEXTUAL_COLOR, SPACING } from '../../constants/theme.js';

const StyledCallout = styled.aside`
  background: linear-gradient(160deg, ${CONTEXTUAL_COLOR.WARNING.TONE40} 17.5%, ${COLOR.BRANDY} 180%);
  box-sizing: border-box;
  border-radius: ${BORDER_RADIUS.CORNER};
  padding: ${SPACING['8']};
`;

const Callout = ({ heading, text, btnLabel, to }) => (
  <StyledCallout>
    <Heading level="3">{heading}</Heading>
    <Paragraph>{text}</Paragraph>
    <Button to={to}>{btnLabel}</Button>
  </StyledCallout>
);

Callout.propTypes = {
  heading: string,
  text: string,
  btnLabel: string,
  to: string,
};

Callout.defaultProps = {
  heading: 'Get in touch',
  text: 'Please contact us for more details about the next fellowship round.',
  btnLabel: 'Enquire',
  to: '/enquire',
};

export default Callout;
