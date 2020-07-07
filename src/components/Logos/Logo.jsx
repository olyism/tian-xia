import React from 'react';
import {
  arrayOf,
  bool,
  number,
  shape,
  string,
} from 'prop-types';
import styled from 'styled-components';
import {
  BORDER_RADIUS,
  BREAKPOINTS,
  COLOR,
  CONTEXTUAL_COLOR,
  FONT_SIZE,
  GUTTER_WIDTH,
  LINE_HEIGHT,
  SHADOW,
  SPACING
} from '../../constants/theme';

const StyledLI = styled.li`
flex: 1;
margin: 0 0 ${LINE_HEIGHT.BASE};

@media (min-width: ${BREAKPOINTS.SM}) {
  max-width: 186px;
  padding: 0 ${GUTTER_WIDTH};
}

${({ index }) => {
  if ((index + 1) % 6 === 0) {
    return `
      &::after {
        @media (min-width: ${BREAKPOINTS.SM}) {
          content: " ";
          flex-basis: 100%;
          height: 0;
        }
      }
    `;
  }
}}
`;

const StyledButton = styled.button`
  background: ${COLOR.WHITE};
  border: 2px solid ${COLOR.IRON};
  border-radius: ${BORDER_RADIUS.CORNER};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  transition: box-shadow .25s;
  padding: ${SPACING['5']};
  width: 100%;

  @media (min-width: ${BREAKPOINTS.SM}) {
    height: 144px;
  }

  &:active {
    border-color: ${COLOR.CLARET};
  }

  &:hover {
    box-shadow: ${SHADOW.BUTTON};
  }
`;

const StyledImg = styled.img`
  display: block;
  margin: 0 auto ${LINE_HEIGHT.SUBTEXT};
  max-height: 60px;
`;

const StyledLink = styled.span`
  border-bottom: 1px solid ${CONTEXTUAL_COLOR.INFO.TONE40};
  color: ${CONTEXTUAL_COLOR.LINK.LINK};
  display: none;
  font-size: ${FONT_SIZE.SUBTEXT};
  margin: auto auto 0;
  text-align: center;

  @media (min-width: ${BREAKPOINTS.SM}) {
    display: inline-block;
  }
`;

const Logo = ({ quotes, logo, partnerName, index }) => (
  <StyledLI index={index}>
    <StyledButton disabled={quotes.length}>
      <StyledImg alt={partnerName} src={logo} />
      {quotes && <StyledLink>View testimonial</StyledLink>}
    </StyledButton>
  </StyledLI>
);

Logo.propTypes = {
  quotes: arrayOf(shape({
    quote: string.isRequired,
    author: string.isRequired,
    isPreviouslyEmployed: bool.isRequired,
  })),
  logo: string.isRequired,
  partnerName: string.isRequired,
  index: number.isRequired,
};

Logo.defaultProps = {
  quotes: [],
};

export default Logo;
