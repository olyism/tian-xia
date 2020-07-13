import React from 'react';
import styled from 'styled-components';
import {
  arrayOf,
  bool,
  shape,
  string
} from 'prop-types';
import { 
  COLOR, 
  SPACING
} from '../../constants/theme';

const StyledArticle = styled.article`
  padding: 0 ${SPACING['8']};
`;

const StyledUL = styled.ul`
  list-style: none outside;
  margin: 0;
  padding: 0;
`;

const StyledLI = styled.li`
  border-bottom: 1px solid ${COLOR.IRON};
  margin-bottom: ${SPACING['5']};
  padding-bottom: ${SPACING['5']};

  &:last-child {
    border-bottom: 0;
  }
`;

const StyledBlockquote = styled.blockquote`
  margin: 0;
`;

const StyledParagraph = styled.p`
  font-size: 16px;
  line-height: 24px;
`;

const StyledAuthor = styled.span`
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
`;

const LogoContent = ({ quotes }) => (
  <StyledArticle>
    <StyledUL>
      {quotes.map((data, i) => {
        const { quote, author, isPreviouslyEmployed } = data;
        return (
          <StyledLI key={`quote-${i}`}>
            <StyledBlockquote>
              <StyledParagraph>"{quote}"</StyledParagraph>
              {author && (
                <footer>
                  <StyledAuthor>{author}</StyledAuthor>
                  {isPreviouslyEmployed && (
                    <sup title={`${author} was formerly employed in this position`}>1</sup>
                  )}
                </footer>
              )}
            </StyledBlockquote>
          </StyledLI>
        );
      })}
    </StyledUL>
  </StyledArticle>
);

LogoContent.propTypes = {
  quotes: arrayOf(shape({
    quote: string.isRequired,
    author: string.isRequired,
    isPreviouslyEmployed: bool.isRequired,
  })),
};

export default LogoContent;