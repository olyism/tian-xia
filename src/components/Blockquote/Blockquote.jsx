import React from 'react';
import styled from 'styled-components';
import { bool, shape, string } from 'prop-types';
import { 
  BORDER_RADIUS,
  COLOR,
  CONTEXTUAL_COLOR,
  FONT_SIZE,
  FONT_STACK,
  LINE_HEIGHT,
  SPACING
} from '../../constants/theme';
import SmallPrint from '../SmallPrint';

const StyledBlockquote = styled.blockquote`
  background: ${CONTEXTUAL_COLOR.WARNING.TONE20};
  border-radius: ${BORDER_RADIUS.CORNER};
  color: ${COLOR.TUNA};
  font-family: ${FONT_STACK.SANS_SERIF};
  font-size: ${FONT_SIZE.TEXT};
  line-height: ${LINE_HEIGHT.TEXT};
  margin: 0 0 ${LINE_HEIGHT.BASE};
  padding: ${SPACING['8']};
`;

const StyledParagraph = styled.p`
  margin: 0;
`;

const StyledAuthor = styled.p`
  font-weight: bold;
  margin: ${LINE_HEIGHT.BASE} 0 0;
`;

const Blockquote = ({ quote, author, smallPrint }) => (
  <StyledBlockquote>
    <StyledParagraph>"{quote}"</StyledParagraph>
    {author && 
      <footer>
        <StyledAuthor>{author}</StyledAuthor>
        {smallPrint && <SmallPrint smallPrint={smallPrint} />}
      </footer>
    }
  </StyledBlockquote>
);

Blockquote.propTypes = {
  quote: string.isRequired,
  author: string,
  smallPrint: shape({
    label: string,
    content: string,
  }),
};

Blockquote.defaultProps = {
  author: '',
  smallPrint: {},
};

export default Blockquote;
