import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import Button from '../Button';
import { BORDER_RADIUS, COLOR, CONTEXTUAL_COLOR, SPACING } from '../../constants/theme.js';

const StyledCallout = styled.aside`
  background: ${COLOR.CLARET};
  box-sizing: border-box;
  border-radius: ${BORDER_RADIUS.CORNER};
  padding: ${SPACING['8']};
`;

const StyledHeading = styled(Heading)`
  color: ${COLOR.WHITE};
`;

const StyledParagraph = styled(Paragraph)`
  color: ${COLOR.WHITE};
`;

const Callout = ({ heading, text, btnLabel, to }) => (
  <StyledCallout>
    <StyledHeading level="3">{heading}</StyledHeading>
    <StyledParagraph>{text}</StyledParagraph>
    <Button btnStyle="primary-white" to={to}>{btnLabel}</Button>
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
  to: 'mailto:info@tian-xia.com',
};

export default Callout;
