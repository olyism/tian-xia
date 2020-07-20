import React from 'react';
import styled from 'styled-components';
import { oneOf, shape, string } from 'prop-types';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import Button from '../Button';
import {
  BORDER_RADIUS,
  COLOR,
  SPACING
} from '../../constants/theme.js';

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

const Callout = ({ title, content, btn }) => (
  <StyledCallout>
    {title && <StyledHeading level="3">{title}</StyledHeading>}
    {content && <StyledParagraph>{content}</StyledParagraph>}
    {btn.label && btn.link && <Button btnStyle="primary-white" to={btn.link}>{btn.label}</Button>}
  </StyledCallout>
);

Callout.propTypes = {
  title: string,
  content: string,
  btn: shape({
    label: string,
    link: string,
    target: oneOf(['_self', '_blank']),
  }),
};

Callout.defaultProps = {
  title: '',
  content: '',
  btn: {
    label: '',
    link: '',
    target: '_self',
  },

};

export default Callout;
