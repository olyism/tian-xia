import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';
import { 
  BORDER_RADIUS, 
  CONTEXTUAL_COLOR,
  FONT_STACK, 
  SPACING 
} from '../../constants/theme.js';

const StyledCard = styled.article`
  background: rgba(255, 255, 255, .8);
  border-radius: ${BORDER_RADIUS.CORNER};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  padding: ${SPACING['8']};
  width: 300px;
`;

const StyledQuote = styled.blockquote`
  color: ${CONTEXTUAL_COLOR.TEXT};
  font-family: ${FONT_STACK.SANS_SERIF};
  font-size: 16px;
  line-height: 24px;
  margin: 0 0 12px;
  width: 100%;
`;

const StyledAuthor = styled.p`
  align-self: flex-end;
  color: ${CONTEXTUAL_COLOR.TEXT};
  font-family: ${FONT_STACK.SANS_SERIF};
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
  margin: auto 0 0;
  width: 100%;
`;

const Card = ({ quote, author, className }) => (
  <StyledCard className={className}>
    <StyledQuote>{quote}</StyledQuote>
    {author && <StyledAuthor>{author}</StyledAuthor>}
  </StyledCard>
);

Card.propTypes = {
  quote: string.isRequired,
  author: string,
  className: string,
};

Card.defaultProps = {
  author: '',
  className: '',
};

export default Card;
